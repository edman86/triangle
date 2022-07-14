import React from "react";
import { useState } from 'react';

const dataSet = [
    {
        id: 1,
        item: 'item1',
        checked: false
    },
    {
        id: 2,
        item: 'item2',
        checked: false
    },
    {
        id: 3,
        item: 'item3',
        checked: true
    },
]

const App01 = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(dataSet);
    
    const handleClick = () => {
        
        setCount(count => count + 1)
        // console.log(count);
    };

    const check = (id) => {
        const upd = data.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: !item.checked
                }
            }

            return item;
        })

        setData(upd);
    }
    
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClick}>+</button>
            <ul>
                {data.map((item) => {
                    return (
                        <li className="item">
                            <input 
                                id="inp"
                                type="checkbox" 
                                checked={item.checked}
                                onChange={() => check(item.id)}
                            />
                            <label htmlFor="inp">{item.item}</label>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default App01;