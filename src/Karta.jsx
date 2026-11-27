import React from "react";

function Karta({ tytul, opis }) {
  return (
    <article className="karta">
      <div className="karta-znak">🏓</div>
      <h3>{tytul}</h3>
      <p>{opis}</p>
    </article>
  );
}

export default Karta;