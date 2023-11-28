import './Links.css'
import { Icon } from '@iconify/react';
import { avatar } from '../../assets/link/avatar.png'


export function Links() {

  function toggleMode(): void {
    const html: HTMLElement = document.documentElement;
    html.classList.toggle("light");
  
    // Pegar a tag img
    const img: HTMLImageElement | null = document.querySelector("#profile img");
  
    // Substituir a imagem
    if (img) {
      if (html.classList.contains("light")) {
        // Se estiver em light mode, adicionar a imagem light
        img.setAttribute("src", "../../assets/link/avatar-light.png");
      } else {
        // Se estiver sem light mode, manter a imagem normal
        img.setAttribute("src", "../../assets/link/avatar.png");
      }
    }
  }
    return (
      <>
       <div id="container">
      <div id="profile">
        <img
          src={avatar}
          alt="Photo Marco profile"
        />
        <p>@marcotorquato</p>
      </div>

      <div id="switch" onClick={toggleMode}>
        <button></button>
        <span></span>
      </div>

      <ul>
        <li>
          <a href="https://www.marcotorquato.com/">Portfolio</a>
        </li>

        <li>
          <a href="https://github.com/marcotorquato">Repositories</a>
        </li>
        <li>
          <a href="https://www.marcotorquato.com/#portfolio" target="_blank">
            Projects
          </a>
        </li>

        <li>
          <a href="https://discord.gg/dXnuHwJ2g4">Discord</a>
        </li>

        <li>
          <a href="https://www.marcotorquato.com/pomotimer.html">
            Study with me - Pomodoro Timer
          </a>
        </li>
      </ul>

      <div id="social-links">
        <a
          href="https://github.com/marcotorquato/"
          className="github"
          target="_blank"
        >
          <Icon icon="mdi:github" />
        </a>
        <a
          href="https://www.instagram.com/marcotorquat/"
          target="_blank"
          className="instagram"
        >
          <i><Icon icon="mdi:instagram" /></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marcotorquato/"
          target="_blank"
          className="linkedin"
        >
          <i><Icon icon="mdi:linkedin" /></i>
        </a>
        <a
          href="https://www.duolingo.com/profile/MarcoTorquato"
          target="_blank"
          className="duolingo"
        >
          <i><Icon icon="mdi:duolingo" /></i>
        </a>
      </div>

      <footer>
        Made with ♥ by{' '}
        <a href="https://www.marcotorquato.com/" target="_blank">
          Marco Torquato
        </a>
      </footer>
    </div>
      
      </>
    )
  }