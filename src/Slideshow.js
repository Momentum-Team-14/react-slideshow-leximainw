import {useState} from 'react'

const Slideshow = ({slides, pageSize=1, sortBy='', onSort=undefined}) => {
    const btnClasses = "btn btn-primary"
    const btnDisabled = btnClasses + " disabled"
    const [currPage, setCurrSlide] = useState(0)
    const currIndex = currPage * pageSize
    const numPages = Math.ceil(slides.length / pageSize)
    if (!onSort) {
        onSort = () => {}
    }
    return (
        <div className="slides-app">
            {(numPages ? numPages : '') && slides.slice(currIndex, currIndex + pageSize)}
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
                    {sortBy && <button
                        className={btnClasses}
                        onClick={onSort}
                    >Sort by {sortBy}</button>}
                </div>
            </div>
        </div>
    )
}

export default Slideshow;