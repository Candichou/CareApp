import { useEffect, useState } from "react";
import "./App.css";

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
  /*   const [...arrayDocteur, ...setArrayDocteur] = useState(""); */

  useEffect(() => {
    async function fetchDoctor() {
      const response = await fetch("http://localhost:4242/doctor");
      const dataDoctor = await response.json();
      console.log(dataDoctor);
      setCardDoctor(dataDoctor.response);
      /*  setArrayDocteur(dataDoctor.results); */
    }
    fetchDoctor();
  }, []);

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
        <section className="search-zone">
          <h2>Recherche ton spécialiste bienveillant</h2>
          <input
            type="text"
            placeholder="cardiologue... ville... code postale..."
          />
          <button>rechercher</button>
        </section>
        <section className="display-doctor">
          {cardDoctor.map((doctor) => {
            return (
              <div key={doctor.id}>
                <ul className="card-doctor">
                  <li>
                    Dr {doctor.name} {doctor.firstname}
                  </li>
                  <li>{doctor.speciality}</li>
                  <li>
                    {doctor.street}, {doctor.town}
                  </li>
                  <li>{doctor.postale_code}</li>
                </ul>
                <ul className="card-tag">
                  <li>{doctor.tag}</li>
                </ul>
              </div>
            );
          })}
        </section>
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
