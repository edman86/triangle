import React from 'react';

const MySelect = ({ options, defaultValue, value, onChange}) => {
    return (
        <select 
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option => {
                return (
                    <option 
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                );
            })}
        </select>
    );
};

export default MySelect;