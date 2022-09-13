import {useState} from 'react'

const Slideshow = props => {
    const slides = props.slides
    const btnClasses = "btn btn-primary"
    const btnDisabled = btnClasses + " disabled"
    const [currPage, setCurrSlide] = useState(0)
    const currIndex = currPage * props.pageSize
    const numPages = Math.ceil(slides.length / props.pageSize)
    if (!props.onSort) {
        props.onSort = ''
    }
    return (
        <div className="slides-app">
            {(numPages ? numPages : '') && slides.slice(currIndex, currIndex + props.pageSize)}
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                <div className="btn-group">
                    <button
                        className={currPage ? btnClasses : btnDisabled}
                        onClick={() => setCurrSlide(0)}
                    >Start Over</button>
                    <button
                        className={currPage ? btnClasses : btnDisabled}
                        onClick={() => setCurrSlide(currPage - 1)}
                    >Back</button>
                    <button
                        className={currPage < numPages - 1 ? btnClasses : btnDisabled}
                        onClick={() => setCurrSlide(currPage + 1)}
                    >Next</button>
                    {props.onSort && <button
                        className={btnClasses}
                        onClick={props.onSort}
                    >{props.sortText ? props.sortText : props.sortBy ? `Sort by ${props.sortBy}` : 'Sort'}</button>}
                </div>
            </div>
        </div>
    )
}

export default Slideshow;