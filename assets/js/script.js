
  
  
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



  // Filter - Portfolio Page
  window.onload = function () {
const digitalMarketingFilter = document.getElementById('filter-digital-marketing');
const webDesignFilter = document.getElementById('filter-web-design');
const rowContainer = document.getElementById('portfolio-row');
const cards = Array.from(rowContainer.children); // Array delle card
    
function applyFiltersAndReorganize() {
    const alwaysVisibleCards = [];
    const visibleCards = [];
    const hiddenCards = [];
    
  cards.forEach(card => {
    const isDigitalMarketing = card.classList.contains('digital-marketing');
    const isWebDesign = card.classList.contains('web-design');
    const isAlwaysVisible = card.classList.contains('always-visible');
    
    // Determina quali card devono essere visibili
    if (isAlwaysVisible) {
      alwaysVisibleCards.push(card); // Card sempre visibili
      card.style.display = 'block';
    } else if (
      (digitalMarketingFilter.checked && isDigitalMarketing) ||
      (webDesignFilter.checked && isWebDesign)
    ) {
      visibleCards.push(card); // Card visibili in base ai filtri
      card.style.display = 'block';
    } else {
      hiddenCards.push(card); // Card nascoste
       card.style.display = 'none';
   }
});
    
    // Ricostruisci le card visibili dopo quelle sempre visibili
    const orderedCards = [...alwaysVisibleCards, ...visibleCards];
    orderedCards.forEach(card => {
    rowContainer.appendChild(card); // Riordina le card nel DOM
    });
}
    
    // Event listener per i filtri
    digitalMarketingFilter.addEventListener('change', applyFiltersAndReorganize);
    webDesignFilter.addEventListener('change', applyFiltersAndReorganize);
    
    // Applica i filtri all'inizio
    applyFiltersAndReorganize();
};