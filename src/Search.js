import React, { useState } from 'react'
import Weather from './Weather'
import styles from './search.module.css'
require('dotenv').config()


// configure your .env key with openweather.org

export default function Search() {

    const[query, setQuery] = useState('')
    const[flag, setFlag] = useState("false")
    const[weather, setWeather] = useState({
        name: "",
        weather: [{
            main: "",
            description: ""
        }],
        main: {
            temp: "",
            temp_min: "",
            temp_max: "",
            humidity: "",
            pressure: ""
        }
    })

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const getWeather = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_KEY}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Error, please used a valid query")
            } else {
                return (response.json());
            }
        }
        ).then(response => {
            setWeather(response)
            setFlag("true")
        })
        .catch(err => {
            console.log(err)
        });
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getWeather()
    }

    return (
        <div className={styles.bg}>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={query} onChange={handleChange} className={styles.input}></input>
                <input type='submit' value='Submit' className={styles.button}></input>
            </form>
            {flag !== "false"?<Weather weather={weather}/> : "Please enter your city..."}

        </div>
    )
}
