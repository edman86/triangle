import { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ stars, isReversed }) => {

    const [triangle, setTriangle] = useState([]);

    useEffect(() => {
        let arr = [];
        let tr = '';

        if (!isReversed) {
            for (let i = stars; i > 0; i--) {
                for (let j = 0; j < i; j++) {
                    tr += '*';
                }

                arr.push(tr)
                tr = '';
            }

        } else {
            for (let i = 0; i <= stars; i++) {
                for (let j = 0; j < i; j++) {
                    tr += '*';
                }

                arr.push(tr)
                tr = '';
            }
        }

        setTriangle(arr);

    }, [stars, isReversed]);

    return (
        <div className="dashboard">
            <div className="triangle">
                {triangle.map((item, index) => {
                    return (
                        <div key={index}>{item}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default Dashboard;