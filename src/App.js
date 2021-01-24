import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import axios from "axios";
const { Header } = Layout;
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
      <div className="covid-19">
        {covid.map((prop) => {
          return (
            <div>
              <div classname="header">
                <Header className="header">
                  <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">Algoritma Alıştırmaları</Menu.Item>
                    <Menu.Item key="2">Videolu Dersler</Menu.Item>
                    <Menu.Item key="3">Forum</Menu.Item>
                    <Menu.Item key="4">Blog</Menu.Item>
                    <Menu.Item key="5">Üye Girişi</Menu.Item>
                  </Menu>
                </Header>
              </div>
            </div>
          );
        })}
      </div>
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
