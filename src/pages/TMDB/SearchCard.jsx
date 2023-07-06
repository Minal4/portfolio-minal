import React from 'react'

const SearchCard = ({ movie }) => {
    return (
        <> <div className="card" key={movie.id}>
            <div className="card__image">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" />
            </div>
            <div className="card__content p-4">
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

export default SearchCard