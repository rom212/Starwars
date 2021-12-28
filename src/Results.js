import styles from "./Results.module.css";

function Results(props) {
  
  return (
    <div className={styles.main}>
     {props.people === null? "Tyler, please fetch a character" : `We were able to fetch ${props.people.name} whose hair color is ${props.people.hair_color} and whose height is ${props.people.height} cm`}
    </div>
  );
}

export default Results;
