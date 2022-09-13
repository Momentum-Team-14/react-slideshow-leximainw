import {useState} from 'react'
import './App.css'
import { filmData } from './film-data'

function App() {
  const btnClasses = "btn btn-primary"
  const btnDisabled = btnClasses + " disabled"
  const [currSlide, setCurrSlide] = useState(0)
  const numSlides = filmData.length
  const currFilm = filmData[currSlide]
  return (
    <div className="slides-app">
      <div style={{display: 'flex', width: '100vw', marginBottom: '1rem'}}>
        <div style={{maxWidth: '15%', marginRight: '1rem'}}><img src={currFilm.image} style={{width: '100%'}}></img></div>
        <div>
          <div><span title={currFilm.original_title_romanised}>{currFilm.original_title}</span> <span>({currFilm.title})</span></div>
          <div><span style={{marginRight: '1rem'}}>Released {currFilm.release_date}</span><span style={{marginRight: '1rem'}}>Runtime: {currFilm.running_time} minutes</span><span>Rotten Tomatoes score: {currFilm.rt_score}%</span></div>
          <div>{currFilm.description}</div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="btn-group">
          <button
            className={currSlide ? btnClasses : btnDisabled}
            onClick={() => setCurrSlide(0)}
          >Start Over</button>
          <button
            className={currSlide ? btnClasses : btnDisabled}
            onClick={() => setCurrSlide(currSlide - 1)}
          >Back</button>
          <button
            className={currSlide < numSlides - 1 ? btnClasses : btnDisabled}
            onClick={() => setCurrSlide(currSlide + 1)}
          >Next</button>
        </div>
      </div>
    </div>
  )
}

export default App
