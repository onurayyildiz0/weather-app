import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({});
  const [isActive, SetIsActive] = useState(false);

  const handleClick = async () => {
    const api = "4c3fc06c18fd62c1835d91271096a728";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios
      .get(baseURL)
      .then(async (res) => {
        await setInfo(res.data);
      })
      .catch((err) => console.log("Hatanız : ", err));
    SetIsActive(true);
  };

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-hava-durumu bg-cover relative">
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-opacity-50 bg-black absolute gap-20 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-yellow-500 text-4xl font-semibold">
              Hava Durumu
            </h1>

            <input
              value={city}
              placeholder="Şehir Giriniz..."
              type="text"
              className="border-yellow-500 border-b-2 bg-transparent w-96 outline-none px-4"
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-yellow-500 text-white"
              onClick={handleClick}
            >
              Verileri Göster
            </button>
          </div>
          

          {isActive ? (
            <div className="flex flex-col items-center justify-center gap-5 text-white font-semibold">
              <p>
                {info.name},{info.sys.country}
              </p>
              <p>Hava Durumu : {info.weather[0].description}</p>
              <p>Sıcaklık : {info.main.temp}</p>
              <p>Hissedilen : {info.main.feels_like}</p>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Weather;
