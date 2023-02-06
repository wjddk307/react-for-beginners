
import ProptTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.ProptTypes = {
    text: ProptTypes.string.isRequired,
}

export default Button;