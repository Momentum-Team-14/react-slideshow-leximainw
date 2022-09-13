import './App.css'
import { ghibliData } from './ghibli-data'
import FilmDetail from './FilmDetail'
import Slideshow from './Slideshow'

const filmData = ghibliData

const App = () => <Slideshow pageSize={10} slides={filmData.map(film => <FilmDetail film={film} />)}/>

export default App
