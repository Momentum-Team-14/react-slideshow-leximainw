import './App.css'
import { filmData } from './film-data'
import FilmDetail from './FilmDetail'
import Slideshow from './Slideshow'

function App() {
    return (
        <Slideshow
            slides={filmData.map(film => <FilmDetail film={film} />)}
        />
    )
}

export default App
