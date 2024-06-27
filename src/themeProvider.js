import { createTheme } from "@mui/material";

const theme = createTheme(
    {
        typography: {
            h1: {
                fontFamily: 'Roboto',
                fontWeight: "bold",
                fontSize: '24px',
            },
            subtitle1: {
                fontFamily: 'Roboto',
                fontWeight: "bold",
                fontSize: '16px',
            },
            caption: {
                fontFamily: 'Roboto',
                fontWeight: "normal",
                fontSize: '12px',
            },
            body1:{
                fontFamily: 'Roboto',
                fontWeight: "normal",
                fontSize: '16px',
            }   
        },

        palette:{
            primary: {
                main: "#EA5B0C",
            },
            secondary: {
                main: "#676c6f",
            },
            success:{
                main: "#68A772",
            },
            error:{
                main: "#E54343",
            },
            warning:{
                main: "#E97F45",
            }
        }
    }
)

export default theme