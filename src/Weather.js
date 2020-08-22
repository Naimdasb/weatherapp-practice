import React from 'react'

export default function Weather(props) {
    return (
        <div>
                <p>Weather in {props.weather.name}</p>
                <p>{props.weather.weather[0].main}</p>
                <p>{props.weather.weather[0].description.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</p>
                <p>Temperature {props.weather.main.temp === ""? null :(props.weather.main.temp - 273.15).toFixed(2)} ºC</p>
                <p>Humidity {props.weather.main.humidity}%</p>
                <p>Pressure {props.weather.main.pressure} hPa</p>
        </div>
    )
}
