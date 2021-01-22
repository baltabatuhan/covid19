import React, { useEffect, useState } from "react";

import axios from "axios";

export default function App() {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then((response) => setCovid(response.data))
      .catch((error) => console.log({ error }));
  }, []);
  console.log("zaza", covid);

  {
    return (
      <div className="covid-19">
        {covid.map((prop) => {
          return (
            <div key={prop.name}>
              <h2>Date: {prop.date}</h2>
              <h2>Death: {prop.death}</h2>
              <h2>{prop.deathIncrease}</h2>
              <h2>{prop.hospitalized}</h2>
              <h2>{prop.hospitalizedCurrently}</h2>
              <h2>{prop.hospitalizedIncrease}</h2>
              <h2>{prop.inIcuCumulative}</h2>
              <h2>{prop.inIcuCurrently}</h2>
              <h2>{prop.negative}</h2>
              <h2>{prop.negativeIncrease}</h2>
              <h2>{prop.positive}</h2>
              <h2>{prop.positiveIncrease}</h2>
              <h2>{prop.onVentilatorCurrently}</h2>
              <h2>{prop.onVentilatorCumulative}</h2>
              <h2>{prop.pending}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
