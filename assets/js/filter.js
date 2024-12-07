

  // Filter - Portfolio Page
  window.onload= function (){
    console.log("Script caricato correttamente."); 
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