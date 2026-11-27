import React from "react";

function PrzedstawSie({ przedstawSie }) {
  return (
    <button className="przycisk" onClick={przedstawSie}>
      Przedstaw się
    </button>
  );
}

export default PrzedstawSie;