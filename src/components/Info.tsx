import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

function Info() {
  const city = useSelector((store: any) => store.city);
  const [item, setItem] = useState({
    location: {
      name: "" as string | null,
      country: "" as string | null,
    },
    current: {
      temp_c: 0 as number | null,
      temp_f: 0 as number | null,
      wind_kph: 0 as number | null,
      humidity: 0 as number | null,
      cloud: 0 as number | null,
      pressure_mb: 0 as number | null,
      last_updated: "" as string | null,
      wind_dir: "" as string | null,
    },
    isLoading: true as boolean,
    isError: false as boolean,
  });

  useEffect(() => {
    const dataLocation = {
      name: null,
      country: null,
    };
    const dataCurrent = {
      temp_c: 0,
      temp_f: 0,
      wind_kph: 0,
      humidity: 0,
      cloud: 0,
      pressure_mb: 0,
      last_updated: "",
      wind_dir: "",
    };
    const func = async () => {
      let data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b14ff7a1eb8d445a987123036221910&q=${city}&aqi=no`
      ).then((response: any) => response.json());

      setItem({
        location: data.location ? data.location : dataLocation,
        current: data.current ? data.current : dataCurrent,
        isLoading: false,
        isError: data.error ? true : false,
      });
    };
    func();
  }, [city]);
  return (
    <div className="info">
      {!item.isLoading && !item.isError ? (
        <div className="api">
          <Row
            first={item.location.name}
            second={item.location.country}
            firstText="City:"
            secondText="Country:"
          />
          <Row
            first={`${item.current.temp_c} C° | ${item.current.temp_f} °F`}
            second={`${item.current.cloud} %`}
            firstText="Temperature:"
            secondText="Cloud Cover:"
          />
          <Row
            first={`${item.current.wind_kph} km/h`}
            second={item.current.wind_dir}
            firstText="Wind speed:"
            secondText="Wind Direction:"
          />
          <Row
            first={item.current.humidity}
            second={item.current.pressure_mb}
            firstText="Humidity:"
            secondText="Pressure:"
          />
          <div className="last-update">
            <p>Last update: {item.current.last_updated}</p>
          </div>
        </div>
      ) : (
        <p className="error">Error place is not found</p>
      )}
    </div>
  );
}

export default Info;
