
  const form = document.querySelector(".contact-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(() => {
      message.style.display = "block";
      form.reset();
    }).catch(() => {
      alert("Something went wrong. Please try again.");
    });
  });
