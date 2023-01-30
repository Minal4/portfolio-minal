import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

const Weather = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [condition, setCondition] = useState('');
    useEffect(() => {

        axios.get(url).then((response) => {
            setData(response.data);
        })
        setCondition(data.current ? data.current.condition.text : null);
    }, [location])

    const url = `http://api.weatherapi.com/v1/current.json?key=9d559f03fa41499b9a473811233001&q=${location}&aqi=no`

    const clickHandler = (e) => {
        e.preventDefault();
        setLocation('')
    }

    console.log(condition, 'asd')


    return (
        <div>
            <>
                <section className={`section weather ${data.current ? condition : null}`}>
                    <div className="container">
                        <div className="section__heading">
                            <h2>Weather</h2>
                        </div>
                        <div className="search">
                            <input type="text" className='input-field' value={location} onChange={(e) => setLocation(e.target.value)} />
                            <button type='submit' className='btn__link' onClick={clickHandler}>Search</button>
                        </div>
                        <div className="weather__forecast">
                            <ul>
                                <li>
                                    <div className="condition specs">
                                        <h2>Condition</h2>
                                        <div className="weather-data">
                                            <span className="img"><img src={data.current ? data.current.condition.icon : null} alt="icon" /></span>
                                            <div className="condition-title">{data.current ? data.current.condition.text : null} </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="wind specs">
                                        <h2>Wind</h2>
                                        <div className="weather-data">
                                            <div className='wind-mph'>{data.current ? `${data.current.wind_mph}` : null}</div>
                                            <div className="wind-kph">{data.current ? `${data.current.wind_kph}kph` : null} </div>
                                            <div className="wind-degree">{data.current ? `${data.current.wind_degree}degree` : null} </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="wind specs">
                                        <h2>Temp</h2>
                                        <div className="weather-data">
                                            <div className='wind-mph'>{data.current ? `${data.current.feelslike_c} ℃` : null}</div>
                                            <div className="wind-kph">{data.current ? `${data.current.feelslike_f} ℉` : null} </div>
                                            <div className="wind-degree">{data.current ? `${data.current.humidity}` : null} </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        </div>
    )
}

export default Weather
