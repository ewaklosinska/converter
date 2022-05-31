import React from "react";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button/Button";

function NavBar() {
    return(
        <div style={{marginTop: "40px"}}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            Start
                        </Link>
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary">
                        <Link to='/about' style={{ textDecoration: 'none',color: 'inherit' }}>
                            Opis
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default NavBar;