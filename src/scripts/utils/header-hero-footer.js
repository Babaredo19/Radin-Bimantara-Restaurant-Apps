/* eslint-disable max-classes-per-file */
class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="#maincontent" class="skip-link">Menuju ke konten</a>
    <header>
        <div class="logo">Katalog Restaurant</div>
            <button id="hamburgerButton" class="hamburger">☰</button>
            <nav id="nav"class="nav-bar">
                <ul>
                    <li>
                        <a href="#/home" class="active">Home</a>
                    </li>
                    <li>
                        <a href="#/favorite">Favorite</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/radinbimantara?igshid=ZDdkNTZiNTM=">About Us</a>
                    </li>
                </ul>
             
            </nav>
        </div>
    </header>
      `;
  }
}

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Ingin Makan Dengan Suasana Yang Nyaman, Bersih, Rapi, dan Harganya Murah?</h1>
          <p class="hero__tagline"> Yuk coba datang ke Restoran Kami, di sana ada banyak varian menu makanan yang enak, lezat dengan harga yang terjangkau. Yuk datang sekarang juga!</p>
        </div>
      </div>
        `;
  }
}

class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    Copyright © 2020 - Katalog Restaurant
   </footer>
      `;
  }
}

customElements.define('custom-header', HeaderElement);
customElements.define('custom-hero', HeroElement);
customElements.define('custom-footer', FooterElement);
