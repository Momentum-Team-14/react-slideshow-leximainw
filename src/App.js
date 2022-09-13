import './App.css'
import { filmData } from './film-data'
// import { ghibliData } from './ghibli-data'
// const filmData = ghibliData
import FilmDetail from './FilmDetail'
import Slideshow from './Slideshow'

const App = () => <Slideshow /*pageSize={10}*/ slides={filmData.map(film => <FilmDetail film={film} />)}/>

export default App
