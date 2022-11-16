import { useEffect, useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log({ starship });
  useEffect(()=>{
    if(starship.pilots.length === 0){
      setFirstPilot("Unknown")
    }
    fetch(starship.pilots[0])
      .then((res)=>res.json())
      .then((pilotData)=>setFirstPilot(pilotData.name))
  }, [starship])

  return <li>{starship.name} - First Pilot {firstPilot}</li>;
}

export default StarshipsListItem;
