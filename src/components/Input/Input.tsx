import React from "react";
import { TextField } from "@mui/material";

interface Props{
    setInputValue: Function;
}

function Input (props: Props) {

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void  {
        props.setInputValue(event.target.value);
    }   

    return(
        <TextField 
            onChange={handleInputChange} 
            type="number" 
            id="outlined-basic" 
            label="Wprowadź kwotę" 
            variant="outlined"
            />
    )
}

export default Input;