import { useEffect, useState } from "react";
import "./App.css";
import { DisplayDoctor } from "./Components/DisplayDoctor";
interface Doctor {
  id: number;
  name: string;
  firstname: string;
  speciality: string;
  street: string;
  town: string;
  postale_code: string;
  tag: string;
}

export default function App() {
  const [cardDoctor, setCardDoctor] = useState<Doctor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchDoctor() {
      const response = await fetch("http://localhost:4242/doctor");
      const dataDoctor = await response.json();
      console.log(dataDoctor);
      setCardDoctor(dataDoctor.response);
    }
    fetchDoctor();
  }, []);

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setSearchTerm(value);
  };

  console.log(searchTerm);
  return (
    <>
      <header>
        <article className="navbar">
          <ul>
            <li>
              <h1>Aequia.</h1>
            </li>
            <li>
              <a href="se connecter">Se connecter</a>
            </li>
          </ul>
        </article>
      </header>
      <main>
        <form className="search-zone">
          <h2>Recherche ton spécialiste bienveillant</h2>
          <input
            type="text"
            placeholder="cardiologue... ville... code postale..."
            onChange={handleSearchTerm}
          />
          <button>rechercher</button>
        </form>
        <DisplayDoctor cardDoctor={cardDoctor} searchTerm={searchTerm} />
      </main>
      <footer>
        <section>
          <article className="footer-brand">
            <h2>Aequia.</h2>
            <button>Me contacter</button>
          </article>
          <article className="footer-mention">
            <h3>© 2026 Aequia</h3>
          </article>
        </section>
      </footer>
    </>
  );
}
