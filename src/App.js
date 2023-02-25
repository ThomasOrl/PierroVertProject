import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h1><a href="index.html">PierroVert</a></h1>
        <ul>
          <li><a href="#">Nos presta</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
      <main className="homePage">
        <div className="description">
          <h1>Bienvenue sur mon site de contact</h1>
          <p>Vous pourrez y retrouver certaines de mes réalisations ainsi qu'un formulaire de contact, n'hésitez pas à le remplir pour toutes questions que vous ayez ou pour une prise de rdv</p>
        </div>
        <div className="container">
          <div className="item">
            <img src="https://via.placeholder.com/350x200" alt="Jardin 1" />
            <h2>Jardin 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, dolor in feugiat faucibus, felis lectus tincidunt sapien, sit amet dictum quam risus eget eros.</p>
          </div>
          <div className="item">
            <img src="https://via.placeholder.com/350x200" alt="Jardin 2" />
            <h2>Jardin 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, dolor in feugiat faucibus, felis lectus tinc</p>
          </div>
          <div className="item">
            <img src="https://via.placeholder.com/350x200" alt="Jardin 3" />
            <h2>Jardin 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, dolor in feugiat faucibus, felis lectus tincidunt sapien, sit amet dictum quam risus eget eros.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
