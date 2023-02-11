import React from 'react'

const Card = ({ movie }) => {
    return (
        <>
            <div className="card">
                <div className="card__image">
                    <a href="#"> <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" /></a>
                </div>
                <div className="card__content">
                    <div className="title">
                        <h2>{movie.title}</h2>
                    </div>
                    <div className="card__date">
                        {movie.release_date}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card