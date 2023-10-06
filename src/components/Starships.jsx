import Starship from "./Starship.jsx";

export default function Starships({ ships }) {
  const loaded = () => {
    console.log("loaded");
    return (
      <>
        {ships.map((swShip, index) => {
          return (
            <>
              <Starship ship={swShip} key={index} />
            </>
          );
        })}
      </>
    );
  };

  const loading = () => {
    console.log("loading");
    return (
      <div>
        <h1>Starships</h1>
        <p>Please wait while the starships load.</p>
      </div>
    );
  };

  return ships ? loaded() : loading();
}
