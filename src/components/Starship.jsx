export default function Starship({ ship }) {
  return (
    <section className="starshipCard" key={ship.name}>
      <h2>{ship.name}</h2>
      <h3>Model:</h3>
      <p>{ship.model}</p>
      <h3>Cargo Capacity:</h3>
      <p>{ship.cargo_capacity}</p>
    </section>
  );
}
