import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    return (
        <>
            <div className="card">
                <div className="card__image">
                    <Link to={`/details/${movie.id}`}> <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" /></Link>
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