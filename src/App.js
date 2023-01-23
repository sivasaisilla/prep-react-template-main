import { useEffect, useState } from "react";
import "./App.css";
import logo from "./mlh-prep.png";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric" +
        "&appid=" +
        process.env.REACT_APP_APIKEY
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["cod"] !== 200) {
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            setResults(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <header className="header">
          <h1 className="heading-main">Weather Application</h1>
          <nav className="btn-items">
            <a href="#root" className="btn">
              Home
            </a>
            <a href="#root" className="btn">
              Login
            </a>
            <a href="#root" className="btn">
              Get Status
            </a>
          </nav>
        </header>
        <img className="logo" src={logo} alt="MLH Prep Logo"></img>
        <div>
          <h2>Enter a city below 👇</h2>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <div className="Results">
            {!isLoaded && <h2>Loading...</h2>}
            {console.log(results)}
            {isLoaded && results && (
              <>
                <h3>{results.weather[0].main}</h3>
                <p>Feels like {results.main.feels_like}°C</p>
                <i>
                  <p>
                    {results.name}, {results.sys.country}
                  </p>
                </i>
              </>
            )}
          </div>
        </div>
        <footer className="footer">
          <nav className="footer-items">
            <a href="#root" className="foot-item">
              About us
            </a>
            <a href="#rot" className="foot-item">
              Contact us
            </a>
            <a href="#root" className="foot-item">
              Privacy
            </a>
            <a href="#root" className="foot-item">
              Terms & Conditions
            </a>
          </nav>

          <h2 className="footer-heading">
            Made with ❤️ by <span> Sivasai</span>
            <a
              href="https://github.com/sivasaisilla"
              className="btn btn-foot"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </h2>
        </footer>
      </>
    );
  }
}

export default App;
