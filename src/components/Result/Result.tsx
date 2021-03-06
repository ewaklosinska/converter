import React from "react";
import { Typography } from "@mui/material";

interface Props{
    result: number;
}

function Result(props: Props) {

    return(
       
        <Typography variant="h5">{props.result}</Typography>
    )
}

export default Result;