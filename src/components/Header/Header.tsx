import React from "react";

import { AppBar, Toolbar, Typography } from "@mui/material";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


function Header() {

    return(
        <>
            <AppBar position="relative">
                <Toolbar>
                    <CurrencyExchangeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
                        <Typography variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                        }}>
                            Przelicznik walut
                        </Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;