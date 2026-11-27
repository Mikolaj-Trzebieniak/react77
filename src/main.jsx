import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Karta from "./Karta";
import PrzedstawSie from "./PrzedstawSie";
import "./style.css";


let tematy = [
  ["Rakietka", "Podstawowy sprzęt gracza. Składa się z deski oraz okładzin, które wpływają na szybkość i rotację piłki."],
  ["Piłeczka", "Współczesna piłeczka do tenisa stołowego ma średnicę 40 mm i jest wykonana z tworzywa sztucznego."],
  ["Serwis", "Każda wymiana rozpoczyna się od serwisu. Piłka musi najpierw odbić się po stronie serwującego, a następnie po stronie przeciwnika."],
  ["Topspin", "To uderzenie z mocną rotacją górną. Piłka po odbiciu od stołu może przyspieszyć i mocno zmienić tor lotu."],
  ["Blok", "Zagranie obronne polegające na zatrzymaniu lub odbiciu szybkiego ataku przeciwnika."],
  ["Tenis stołowy", "Dyscyplina sportowa rozgrywana przy stole, przez siatkę, z użyciem rakietek i lekkiej piłeczki."]
];


let ciekawostki = [
  "Tenis stołowy jest dyscypliną olimpijską od 1988 roku.",
  "Wymiana w tenisie stołowym może trwać zaledwie kilka sekund.",
  "Piłeczka do tenisa stołowego waży około 2,7 grama.",
  "W grze bardzo ważne są rotacja, refleks i dobre ustawienie."
];

let koloryTla = ["#eef5ff", "#f1f8f2", "#fff5ed", "#f5f0ff"];
let kolorLosowy = koloryTla[Math.floor(Math.random() * koloryTla.length)];
let ciekawostkaLosowa = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];

function Aplikacja() {
  let [szukanaNazwa, ustawSzukanaNazwe] = useState("");
  let [imie, ustawImie] = useState(localStorage.getItem("imieUzytkownika") || "");
  let [ciemnyTryb, ustawCiemnyTryb] = useState(false);

  
  let pasujaceTematy = tematy.filter((temat) =>
    temat[0].toLowerCase().includes(szukanaNazwa.toLowerCase())
  );

  function przedstawSie() {
    let noweImie = prompt("Jak masz na imię?");
    if (noweImie !== null && noweImie.trim() !== "") {
      localStorage.setItem("imieUzytkownika", noweImie.trim());
      ustawImie(noweImie.trim());
    }
  }

  return (
    <div
      className={ciemnyTryb ? "strona ciemna" : "strona"}
      style={ciemnyTryb ? {} : { backgroundColor: kolorLosowy }}
    >
      <Header />

      <main className="glowna">

        <section className="powitanie">
          <p className="nadtytul">POZNAJ ŚWIAT SPORTU</p>
          <h1>Świat tenisa stołowego</h1>
          <p className="opis">
            Poznaj sprzęt, techniki i ciekawostki związane z jedną z najszybszych
            dyscyplin sportowych na świecie.
          </p>

          
          <div className="przyciski-powitania">
            <PrzedstawSie przedstawSie={przedstawSie} />
            <button
              className="przycisk przycisk-trybu"
              onClick={() => ustawCiemnyTryb(!ciemnyTryb)}
            >
              {ciemnyTryb ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
            </button>
          </div>

          {imie !== "" && <p className="wiadomosc">Witaj ponownie, {imie}!</p>}
        </section>

        <section className="sekcja">
          <div className="naglowek-sekcji">
            <div>
              <p className="nadtytul">BAZA WIEDZY</p>
              <h2>Poznaj tenis stołowy</h2>
            </div>
            <span className="liczba">{pasujaceTematy.length} tematów</span>
          </div>

          <input
            className="wyszukiwarka"
            type="text"
            placeholder="Szukaj tematu, np. serwis..."
            value={szukanaNazwa}
            onChange={(e) => ustawSzukanaNazwe(e.target.value)}
          />

          <div className="karty">
            {pasujaceTematy.length > 0 ? (
              pasujaceTematy.map((temat, index) => (
                <Karta key={index} tytul={temat[0]} opis={temat[1]} />
              ))
            ) : (
              <p className="brak">Nie znaleziono takiego tematu.</p>
            )}
          </div>
        </section>

        <section className="ciekawostka">
          <div className="ikona">★</div>
          <div>
            <p className="nadtytul">CIEKAWOSTKA DNIA</p>
            <h2>{ciekawostkaLosowa}</h2>
          </div>
        </section>
      </main>

      <footer>
        <p>Świat Tenisa Stołowego · Mini-portal sportowy</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Aplikacja />);