import {useState} from 'react'

const Slideshow = ({slides}) => {
    const btnClasses = "btn btn-primary"
    const btnDisabled = btnClasses + " disabled"
    const [currSlide, setCurrSlide] = useState(0)
    const numSlides = slides.length
    return (
        <div className="slides-app">
            {(numSlides ? numSlides : '') && slides[currSlide]}
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
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

export default Slideshow;