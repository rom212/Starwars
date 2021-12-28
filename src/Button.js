import styles from "./Button.module.css";

function Button(props) {
  return <button className={styles.main} onClick={props.onClick}>{props.children}</button>;
}

export default Button;
