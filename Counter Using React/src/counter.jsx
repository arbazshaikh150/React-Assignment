// Whole logic of counter will be here only
import { useState } from "react";

function Counter(){
    const [x , setx] = useState(0);
    return (
        <div className="container">
            <h1 className="valueDisplay">{x}</h1>
            <div className="buttons">
                <button className="inc" onClick={() => {
                    setx(x + 1);
                }}>Increment</button>
                <button className="dec" onClick={() => {
                   x > 0 && setx(x - 1);
                }}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;