
import Button from './Button';
import styles from './Nav.module.css';

function Nav(props){
    return(
        <div className={styles.main}>
            <Button onClick={props.updatePeople}>Fetch Star Wars</Button>
            <Button>Clear Results</Button>
        </div>
    );
}

export default Nav;