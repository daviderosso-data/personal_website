
  
  
//Mail Sender EmailJS

  (function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "r5Hq_1gTAkbTbSj__",
    });
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene l'invio predefinito del form

    // Recupera i valori dei campi del form
    var name = document.getElementById("user_name").value.trim();
    var email = document.getElementById("user_email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Verifica se tutti i campi sono completi
    if (!name || !email || !message) {
      alert("Per favore, completa tutti i campi del form.");
      return; // Blocca l'invio
    }

    // Verifica se l'email è valida
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Per favore, inserisci un'email valida.");
      return; // Blocca l'invio
    }

    // Genera l'oggetto dei parametri per emailjs
    var params = {
      name: name,
      emails: email,
      message: message,
    };

    // Invia l'email usando emailjs
    emailjs.send("service_2pm90k9", "template_0tmqm48", params).then(
      function (response) {
        alert("Email inviata! Ti risponderò presto.");

        // Resetta i campi del form
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Errore durante l'invio. Riprova più tardi.");
      }
    );
  });
};

