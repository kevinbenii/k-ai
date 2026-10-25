import "./Chip.css";

// Chip
const Chip = (props) => {
    return (
        <span className={props.active ? "chip active" : "chip"}>{props.name}</span>
    );
};

export default Chip;
