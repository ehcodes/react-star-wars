import Starship from "./Starship.jsx";
export default function Starships({ starships }) {
  const loaded = (ships) => {
    {
      ships.map((ship, index) => {
        return <Starship ship={ship} key={index} />;
      });
    }
  };

  const loading = () => {
    return (
      <>
        <h1>Starships</h1>
        <p>Please wait while the starships load.</p>
      </>
    );
  };

  return starships ? loaded(starships) : loading;
}
