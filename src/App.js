import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import axios from "axios";
const { Header, Content } = Layout;
export default function App() {
  const [covid, setCovid] = useState([]);
  var day = new Date().getDate();
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;

  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then((response) => setCovid(response.data))
      .catch((error) => console.log({ error }));
  }, []);
  // <h2>Covid-19 Updates</h2>
  //               <h2>
  //                 {month}/{day}/{year}
  //               </h2>
  {
    return (
      <Layout className="height-100">
        <Header className="header">
          <h2>
            Today: {month}/{day}/{year}
          </h2>

          <h2>Positive</h2>
          <h2>trt2</h2>
          <h2>trt2</h2>
          <h2>trt2</h2>
        </Header>
        <Content
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Content>
      </Layout>
    );
  }
}
{
  /* <div key={prop.name}>
<h2>Positive: {prop.positive}</h2>
<h2>Positive Increase: {prop.positiveIncrease}</h2>
<h2>Death Increase: {prop.deathIncrease}</h2>
<h2>Death Total: {prop.death}</h2>
<h2>Negative Increase: {prop.negativeIncrease}</h2>
<h2>Negative: {prop.negative}</h2>
<h2>Hospitilized: {prop.hospitalized}</h2>
<h2>Hospitilized Currently: {prop.hospitalizedCurrently}</h2>
<h2>Hospitalized Increase: {prop.hospitalizedIncrease}</h2>
<h2>Currently in ICU:{prop.inIcuCurrently}</h2>
<h2>Currently on Ventilator: {prop.onVentilatorCurrently}</h2>
</div> */
}
