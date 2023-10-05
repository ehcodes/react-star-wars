/* eslint-disable react/prop-types */
// import React from 'react'

function Starship({ ship }) {
  return (
    <div>
      <section className="starshipCard" key={ship.name}>
        <h2>{ship.name}</h2>
      </section>
    </div>
  );
}

export default Starship;
