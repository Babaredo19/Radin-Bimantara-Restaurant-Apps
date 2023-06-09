import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
      <h1 class="latest__label">Favorite Restaurant</h1>
      <div class="posts">
      </div>
    </div>
  </section>
      `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    console.log(restos);

    const restosContainer = document.querySelector('.posts');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
