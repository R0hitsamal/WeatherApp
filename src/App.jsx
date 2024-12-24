import "./App.css";
import SearchBox from "./Components/SearchBox";
import InfoBox from "./Components/InfoBox";
import {useState} from "react";

function App() {
  const [weatherData, setWetherData] = useState({});

  const updateInfo = (res) => {
    setWetherData(res);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox weatherData={weatherData} />
    </>
  );
}

export default App;
