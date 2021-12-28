import { useState } from "react";
import styles from "./Home.module.css";
import Nav from "./Nav";
import Results from "./Results";

function Home() {
  const [people, setPeople] = useState(null);

  function updatePeople() {
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={styles.main}>
      <h3>This is a Star Wars demo for Tyler</h3>
      <Nav updatePeople={updatePeople}/>
      <Results people={people} />
    </div>
  );
}

export default Home;
