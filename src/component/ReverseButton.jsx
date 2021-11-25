import './ReverseButton.css';

const ReverseButton = ({ handleClick }) => {
    return (
        <button type="button" className="btn" onClick={handleClick}>
            Reverse
        </button>
    );
};

export default ReverseButton;