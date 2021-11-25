import './InputField.css';

const InputField = ({ handleInput }) => {
    return (
        <input 
            className="input-field" 
            type="text" 
            onChange={ (e) => handleInput(e) }
        />
    );
};

export default InputField;