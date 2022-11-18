import { useState, useEffect } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  console.log("Planet", planet);
  useEffect(() => {
    if(planet.films.length === 0) return
    fetch(planet.films[0])
      .then((res)=>res.json())
      .then((filmData)=>setFirstFilm(filmData.title))
  }, [planet])

  return <li>{planet.name} - First Film {firstFilm}</li>;
}

export default PlanetsListItem;
