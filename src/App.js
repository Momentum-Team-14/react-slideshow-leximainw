import './App.css'
// import { filmData } from './film-data'
// import { ghibliData } from './ghibli-data'
// const filmData = ghibliData
import FilmDetail from './FilmDetail'
import Slideshow from './Slideshow'
import {useEffect, useState} from 'react'

const App = () => {
    const [filmData, setFilmData] = useState([])
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then(res => res.json())
            .then(data => setFilmData(data))
            .catch(err => {
                console.log('Error fetching film data:', err)
                setFilmData(undefined)
            })
    })
    if (filmData === undefined) {
        return (
            <>
                <h1 style={{textAlign: 'center'}}>Couldn't load film data</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className='btn btn-info' onClick={() => setFilmData([])}>Retry?</button>
                </div>
            </>
        )
    }

    return (
        <Slideshow
            /*pageSize={10}*/
            slides={filmData.map(film => <FilmDetail film={film}/>)}
        />
    )
}

export default App
