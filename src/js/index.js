import { WeekProductCard } from './lib/minirender/weekProductCard.js';
import { NewCard } from './lib/minirender/newsCard.js';
import './components/navbar.js';
import { getWeekProducts } from './api/products.js';


/**
 * Aquí van todos los elementos DOM que se requieran del index.html
 */
const INDEX_ELEMENTS = {
  // Contenedor de productos de la semana
  productWeekContainer: document.getElementById('id-products-week'),
};

/**
 * Funcion para llamar a la API y obtener los productos de la semana
 * debe gestionar la promesa del servidor
 */
function fetchWeekProducts() {
  getWeekProducts().then((products) => {
    products.forEach((product) => {
      INDEX_ELEMENTS.productWeekContainer.insertAdjacentHTML(
        'beforeend',
        (new WeekProductCard(product)).renderStr()
      );

    });
  });
}

/**
 * Event listener cuando el DomEs cagado
 */
window.addEventListener('load', () => {

  // Obten los productos de la semana
  fetchWeekProducts();
  /* Mas fetch a la API */
});