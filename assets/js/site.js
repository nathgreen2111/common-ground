// Common Ground Advisory: menu toggle and enquiry form.
(function () {
  document.documentElement.classList.remove("no-js");

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Enquiry form (Formspree). Set the form's action to your Formspree endpoint.
  var form = document.getElementById("enquiry-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var button = form.querySelector("button[type=submit]");
  var email = form.getAttribute("data-fallback-email");

  function show(kind, html) {
    status.className = "form-status " + (kind === "ok" ? "is-ok" : "is-error");
    status.innerHTML = html;
    status.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    var action = form.getAttribute("action") || "";
    if (action.indexOf("YOUR_FORM_ID") !== -1) {
      show("error", "The form isn't connected yet. Please email <a href=\"mailto:" + email + "\">" + email + "</a> and we'll get back to you.");
      return;
    }

    button.disabled = true;
    var label = button.textContent;
    button.textContent = "Sending…";

    fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
      .then(function (res) {
        if (!res.ok) throw new Error("Request failed");
        form.reset();
        form.hidden = true;
        show("ok", "<strong>Thanks, your enquiry has been sent.</strong><br>We'll be in touch within one working day to book your call.");
      })
      .catch(function () {
        show("error", "Your enquiry didn't send. Check your connection and try again, or email <a href=\"mailto:" + email + "\">" + email + "</a>.");
      })
      .finally(function () {
        button.disabled = false;
        button.textContent = label;
      });
  });
})();
