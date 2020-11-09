import React,{useState} from 'react';

const FormInput = () => {
    const [inputValue, setInput] = useState('');
    return (
        <>
            <input 
                type="text" 
                placeholder="Enter text here"
                onChange = {e => {
                    setInput(e.target.value)
                }}
            />
            <h1>{inputValue}</h1>
        </>
    )
}

export default FormInput;