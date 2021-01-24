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
              <h2>Death Total: {prop.death}</h2>
              <h2>Death Increase: {prop.deathIncrease}</h2>
              <h2>Hospitilized: {prop.hospitalized}</h2>
              <h2>Hospitilized Currently: {prop.hospitalizedCurrently}</h2>
              <h2>Hospitalized Increase: {prop.hospitalizedIncrease}</h2>
              <h2>Total ICU: {prop.inIcuCumulative}</h2>
              <h2>Currently in ICU:{prop.inIcuCurrently}</h2>
              <h2>Negative: {prop.negative}</h2>
              <h2>Negative Increase: {prop.negativeIncrease}</h2>
              <h2>Positive: {prop.positive}</h2>
              <h2>Positive Increase: {prop.positiveIncrease}</h2>
              <h2>Currently on Ventilator: {prop.onVentilatorCurrently}</h2>
              <h2>
                Total on Ventilator: {prop.onVentilatoronVentilatorCumulative}
              </h2>
              <h2>Pending: {prop.pending}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
