import React from 'react'
import styles from './search.module.css'


export default function Weather(props) {
    return (
        <div className={styles.sbg}>
                <p className={styles.header}>Weather in {props.weather.name}</p>
                <p>{props.weather.weather[0].main}</p>
                <p>{props.weather.weather[0].description.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</p>
                <p>Temperature {props.weather.main.temp === ""? null :(props.weather.main.temp - 273.15).toFixed(2)} ºC</p>
                <p>Humidity {props.weather.main.humidity}%</p>
                <p>Pressure {props.weather.main.pressure} hPa</p>
                <p>Time in {props.weather.name}</p>
                <p>{new Date().getUTCHours()  + (props.weather.timezone/3600)+":"+new Date().getUTCMinutes() + " hs"}</p>
        </div>
    )
}
