import { useState } from "react";
import InputField from "./component/InputField";
import ReverseButton from "./component/ReverseButton";
import Dashboard from "./component/Dashboard";

function App() {

    const [starsCount, setStarsCount] = useState(0);
    const [isReversed, setReversed] = useState(false);

    const handleInput = (e) => {
        setStarsCount(e.target.value);
    };

    const handleClick = () => {
        setReversed(!isReversed);
    };

    return (
        <div className="App">
            <InputField handleInput={handleInput} />
            <Dashboard stars={starsCount} isReversed={isReversed} />
            <ReverseButton handleClick={handleClick} />
        </div>
    );
}

export default App;
