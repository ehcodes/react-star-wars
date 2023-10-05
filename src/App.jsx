import { useState, useEffect } from "react";
import Starships from "./components/Starships";

export default function App() {
  const [starships, setStarships] = useState(null);

  const getAllStarships = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/starships/`);
      const data = await response.json();
      setStarships(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllStarships();
  }, []);

  return (
    <Starships ships={starships}/>
  )
}