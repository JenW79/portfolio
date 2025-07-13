(function () {
  emailjs.init("k8x1Gidgw7G6v3Ige");

  const form = document.getElementById("contact-form");
  const thankYou = document.createElement("p");
  thankYou.textContent = "Thanks! Your message has been sent.";
  thankYou.style.color = "#6ec06e";
  thankYou.style.display = "none";
  form.appendChild(thankYou);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Spam bot honeypot
    if (form.address.value) {
      console.log("Bot submission blocked.");
      return;
    }

    emailjs.sendForm("service_keqvsg9", "template_syz0qll", form)
      .then(() => {
        thankYou.style.display = "block";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong, please try again later.");
      });
  });
})();
