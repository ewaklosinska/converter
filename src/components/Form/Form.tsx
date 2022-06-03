import React, {useState, useEffect} from "react";
import axios from 'axios';

import { Grid } from "@mui/material";

import Input from "../Input/Input";
import SelectComponent from "../SelectComponent/SelectComponent"
import Result from "../Result/Result";


interface CurrencyNameObj {
    currency: string;
    code: string;
  }

function Form() {

    const [firstSelectValue, setFirstSelectValue] = useState<string | null>('');
    const [secondSelectValue, setSecondSelectValue] = useState<string | null>('');
    const [firstRate, setFirstRate] = useState<number>(0);
    const [secondRate, setSecondRate] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);
    const [rate, setRate] = useState<number | null >(null);
    const [result, setResult] = useState<number>(0);
    const [currencyData, setCurrencyData] = useState<Array<CurrencyNameObj>>([]);

    useEffect(() => {
        axios.get(`http://api.nbp.pl/api/exchangerates/tables/a/?format=json`)
        .then(function(response) {
        setCurrencyData(response.data[0].rates);
    })
    }, [])

    
    useEffect(() => {
        if(firstSelectValue){
          axios.get(`https://api.nbp.pl/api/exchangerates/rates/A/${firstSelectValue}/?format=json`)
          .then(function(response) {
            setFirstRate(response.data.rates[0].mid)
          })
        }
      }, [firstSelectValue])


    useEffect(() => {
        if(secondSelectValue){
          axios.get(`https://api.nbp.pl/api/exchangerates/rates/A/${secondSelectValue}/?format=json`)
          .then(function(response) {
            setSecondRate(response.data.rates[0].mid)
          })
        }
      }, [secondSelectValue])
      
  
    useEffect(()=> {
        if(firstRate && secondRate) {
            setRate(firstRate / secondRate)
        }
    }, [firstRate, secondRate]);


    useEffect(()=> {
        if(inputValue > 0 && rate) {
        setResult(Number((rate * inputValue).toFixed(2)))
        } else {
            setResult(0);
        }
    }, [rate, inputValue])


    return (
        <>
            <Grid container spacing={4} justifyContent="center" alignItems="center" style={{marginTop: "20px"}}>
                <Grid item xs={6}>
                    <Input setInputValue={setInputValue}/>
                </Grid>
                <Grid item xs={6}>
                    <SelectComponent setSelectValue={setFirstSelectValue} currencyData={currencyData} />
                </Grid>
                <Grid item xs={6}>
                    <Result result={result}/>
                </Grid>
                <Grid item xs={6}>
                    <SelectComponent setSelectValue={setSecondSelectValue} currencyData={currencyData}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Form;