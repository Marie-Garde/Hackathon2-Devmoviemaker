import React, { useEffect, useState } from "react";

export default function Convert() {
  const [seconde, setSeconde] = useState(0);
  const [minute, setMinute] = useState(0);

  const handleChange = (e) => {
    setSeconde(e.target.value);
  };

  useEffect(() => {
    setMinute(Math.floor(seconde / 60));
  }, [seconde]);

  return (
    <div>
      <label htmlFor="">Seconde de base :</label>
      <input type="number" value={seconde} onChange={handleChange}></input>
      <button>Convertir</button>
      <p> {minute} </p>
      <p>{seconde % 60}</p>
    </div>
  );
}