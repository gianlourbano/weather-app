import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react"
import Main from "./pages/Main"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#696969"
        },
        secondary: {
            main: "#f5f5f5"
        },
    },
});

const App: React.FC = () => {
    return(
        <ThemeProvider theme={theme} >
            <Main />
        </ThemeProvider>
        
    )
}

export default App
