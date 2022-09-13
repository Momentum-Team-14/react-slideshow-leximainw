const FilmDetail = ({film}) => {
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{maxWidth: '20%', marginRight: '1rem', flexShrink: 0}}><img src={film.image} style={{width: '100%'}} alt={`Film cover for {currFilm.title}`}></img></div>
                <div>
                <div><span title={film.original_title_romanised}>{film.original_title}</span> <span>({film.title})</span></div>
                <div><span style={{marginRight: '1rem'}}>Released {film.release_date}</span><span style={{marginRight: '1rem'}}>Runtime: {film.running_time} minutes</span><span>Rotten Tomatoes score: {film.rt_score}%</span></div>
                <div>{film.description}</div>
            </div>
        </div>
    )
}

export default FilmDetail;