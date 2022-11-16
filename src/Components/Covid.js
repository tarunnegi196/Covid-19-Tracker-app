import React, { useEffect, useState } from "react";
import "./Covid.css";

function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="mainbody">
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li>
            <div className="class_inner1">
              <p className="card_name">
                <span>OUR </span>
                COUNTRY
              </p>
              <p className="card_total">INDIA</p>
            </div>
          </li>

          <li>
            <div className="class_inner2">
              <p className="card_name">
                <span>TOTAL </span>
                RECOVERED
              </p>
              <p className="card_total">{data.recovered}</p>
            </div>
          </li>

          <li>
            <div className="class_inner3">
              <p className="card_name">
                <span>TOTAL </span>
                CONFIRMED
              </p>
              <p className="card_total">{data.confirmed}</p>
            </div>
          </li>

          <li>
            <div className="class_inner4">
              <p className="card_name">
                <span>TOTAL</span>
                DEATH
              </p>
              <p className="card_total">{data.deaths}</p>
            </div>
          </li>

          <li>
            <div className="class_inner5">
              <p className="card_name">
                <span>TOTAL </span>
                ACTIVE
              </p>
              <p className="card_total">{data.active}</p>
            </div>
          </li>

          <li>
            <div className="class_inner6">
              <p className="card_name">
                <span>LAST </span>
                UPDATED
              </p>
              <p className="card_total">{data.lastupdatedtime}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Covid;
