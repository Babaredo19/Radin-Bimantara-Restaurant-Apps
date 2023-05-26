import RestoDbSource from '../../data/restorandb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
    <div class="latest">
      <h1 class="latest__label">Explore Restaurant</h1>
      <div class="posts">
      </div>
    </div>
  </section>
      `;
  },

  async afterRender() {
    const restos = await RestoDbSource.listResto();
    console.log(restos);

    const restosContainer = document.querySelector('.posts');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
