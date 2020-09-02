import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

const App = () => {
    const [lat, setLat] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err.message)
        );
    },[])

    let whatToRender = () => {
        if (errorMessage && !lat) {
            return <div style={{ backgroundColor: 'grey', width: '50%', display: 'flex', justifyContent: 'center', color: 'red' }}>Error: {errorMessage} </div>
        }
        if (!errorMessage && lat) {
            return <SeasonDisplay latitude={lat} />
        }
        return <Spinner message='Please accept location request'/>
    }
    return (
        <div className='border red'>{whatToRender()}</div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))