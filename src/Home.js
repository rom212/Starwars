import { useState } from "react";
import styles from "./Home.module.css";
import Nav from "./Nav";
import Results from "./Results";
import Spinner from "./Spinner";

function Home() {
  const [people, setPeople] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  function clearPeople() {
    setPeople(null);
  }

  function updatePeople() {
    setShowSpinner(true);
    fetch("https://swapi.dev/api/people/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPeople(data);
        setShowSpinner(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={styles.main}>
      <h3>This is a Star Wars demo for Tyler</h3>
      <Nav updatePeople={updatePeople} clearPeople={clearPeople} />
      <Results people={people} />
      {showSpinner ? <Spinner /> : null}
    </div>
  );
}

export default Home;
