import React, { useState, useEffect } from 'react';
import './inputs.css'
export default function Input({ inputs, cal }) {
    const [data1, setData1] = useState("");

    useEffect(() => {
        if (inputs) {
            setData1(prev => prev + inputs); // Append `inputs` when it changes
        }
    }, [inputs]);

    const handleChange = (e) => {
        setData1(e.target.value); // Update with user input
    };

    useEffect(() => {
        if (cal==='=') {

            var result=eval(data1)
            setData1(String(result)); // Convert result to string for display
        }
        if(cal==='e'){
            setData1('');
        }
    }, [cal]); // Runs only when `cal` changes

    return (
        <div className='input'>
            <p>Karthik Calculator</p>
            <input type="text" value={data1} onChange={handleChange} className='inputs'/>
        </div>
    );
}
