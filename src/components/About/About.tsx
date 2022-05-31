import React from "react";
import { Typography } from '@mui/material';

function About() {
    return(
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Kalkulator po wprowadzeniu przez użytkownika kwoty i waluty przelicza podaną kwotę na inną walutę również wybraną przez użytkownika. Kurs walut pochodzi z NBP Web API i zawiera wartości 34 najpopularniejszych walut. Dane aktualizowane są codziennie, zazwyczaj około godziny 16.
        </Typography>
    )
}

export default About;