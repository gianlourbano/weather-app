import React, { useState } from "react"

import { Container, makeStyles, Theme } from "@material-ui/core"

import Text from "../components/Text"
import Input from "../components/Input"

const api = {
    key: "820514584207a651d0537b2722ac4045",
    base: "https://api.openweathermap.org/data/2.5/"
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    main: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(5),
    },
    margin: {
        margin: theme.spacing(2)
    },
    weather: {
        backgroundColor: "rgba(296, 296, 296, 0.7)",
        padding: theme.spacing(3),
        transition: "0.3s",
        animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut}`,

        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    "@keyframes fadeIn": { from: { opacity: 0, }, to: { opacity: 1, }
    },
}))

interface WeatherData {
    main: string,
    description: string,
}

interface Weather {
    cod: number,
    name: string,
    main: { temp: number, humidity: number },
    sys: { country: string },
    weather: Array<WeatherData> 
}

const Main: React.FC = () => {
    const classes = useStyles()

    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState<Weather>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const handleSubmit =  async (event: any) => {
        if(event.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    setQuery("")
                    setWeather(result)
                })
                .catch(error => console.log(error))
        }
    }

    return(
        <Container className={classes.root}>
            <Container className={classes.title}>
                <Text title="Weather" size={40} color="whitesmoke"/>
                <Text title="by UtterLabs" size={30} color="whitesmoke"/>
            </Container>
            <Container className={classes.main}>
                    <Input
                        value={query}
                        onChange={handleChange}
                        label="Locality"
                        className={classes.margin}
                        variant="filled"
                        id="input"
                        onKeyPress={handleSubmit}
                    />
            </Container>
            {weather && weather.cod === 200 && (
                <Container className={classes.weather} >
                    <Text title={`${weather.name} - ${weather.sys.country}`} size={40} color="#696969" />
                    <Text title={`${Math.round(weather.main.temp)}°C - ${weather.main.humidity}`} size={40} color="#696969" />
                    <Text title={weather.weather[0].main} size={40} color="#696969" />
                    <Text title={weather.weather[0].description} size={40} color="#696969" />
                </Container>
            )}
        </Container>
    )
}

export default Main