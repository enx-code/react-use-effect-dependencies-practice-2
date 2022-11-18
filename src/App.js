import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import SelectTypeForm from "./components/SelectTypeForm";
import "./styles.css";

export default function App() {
  const [dataType, setDataType] = useState("");

  const [data, setData] = useState(null);

  console.log("what is it", {data}, "type", dataType);

  useEffect(() => {
    if (!dataType) return;

    fetch(`https://swapi-new.herokuapp.com/api/${dataType}/`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [dataType]);

  return (
    <div>
      <SelectTypeForm setDataType={setDataType} />
      {data && <DataList dataType={dataType} data={data} />}
    </div>
  );
}
