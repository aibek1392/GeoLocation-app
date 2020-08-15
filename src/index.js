import React,{ useState} from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

const App = () => {
    const [lat, setLat] = useState(null)

    window.navigator.geolocation.getCurrentPosition(
        (position) => setLat(position.coords.latitude),
        (err) => console.log(err)
    );
    return (
    <div>Lattitude:{lat}</div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))