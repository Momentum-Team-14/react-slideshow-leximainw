import './App.css'
import { filmData } from './film-data'
// import { ghibliData } from './ghibli-data'
// const filmData = ghibliData
import FilmDetail from './FilmDetail'
import Slideshow from './Slideshow'
import {useState} from 'react'
// import {useEffect} from 'react'

const App = () => {
    // const [filmData, setFilmData] = useState([])
    // useEffect(() => {
    //     fetch('https://ghibliapi.herokuapp.com/films/')
    //         .then(res => res.json())
    //         .then(data => setFilmData(data))
    //         .catch(err => {
    //             console.log('Error fetching film data:', err)
    //             setFilmData(undefined)
    //         })
    // })
    // if (filmData === undefined) {
    //     return (
    //         <>
    //             <h1 style={{textAlign: 'center'}}>Couldn't load film data</h1>
    //             <div style={{display: 'flex', justifyContent: 'center'}}>
    //                 <button className='btn btn-info' onClick={() => setFilmData([])}>Retry?</button>
    //             </div>
    //         </>
    //     )
    // }

    const [sortMode, setSortMode] = useState(0)

    const sortKinds = [
        {
            text: 'Unsorted',
            fn: (a, b) => 1,
        },
        {
            name: 'Year',
            fn: (a, b) => a.release_date - b.release_date,
        },
        {
            name: 'Rating',
            fn: (a, b) => b.rt_score - a.rt_score,
        },
        {
            name: 'Name',
            fn: (a, b) => a.title.localeCompare(b.title),
        },
        {
            name: 'Runtime',
            fn: (a, b) => a.running_time - b.running_time,
        },
    ]
    const nextSortMode = (sortMode + 1) % sortKinds.length

    return (
        <Slideshow
            /*pageSize={10}*/
            slides={[...filmData]
                .sort(sortKinds[sortMode].fn)
                .map(film => <FilmDetail key={film.title} film={film}/>)}
            sortText={sortKinds[nextSortMode].text}
            sortBy={sortKinds[nextSortMode].name}
            onSort={() => setSortMode(nextSortMode)}
        />
    )
}

export default App
