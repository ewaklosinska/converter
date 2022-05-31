import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface Props {
    currencyData: CurrencyObj[];
    setSelectValue: Function;
}

interface CurrencyObj {
    currency: string;
    code: string;
}

function SelectComponent(props: Props) {

const [curr, setCurr] = useState('');

function handleOnChange(event: SelectChangeEvent) {
    setCurr(event.target.value as string)
    props.setSelectValue(event.target.value)
}

useEffect(()=> {
   
        props.setSelectValue(true);
    
}, [props])



    return(
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel>Waluta</InputLabel>
            <Select 
                onChange={handleOnChange}
                value={curr}
                label="Waluta"
                >
                    <MenuItem value=""></MenuItem>
                    {props.currencyData.map(elem => {
                return (
                    <MenuItem
                        key={elem.code} 
                        value={elem.code}>
                        {elem.currency}
                    </MenuItem>)
                })}
            </Select>
            </FormControl>
            </Box>
        
    )
}

export default SelectComponent;