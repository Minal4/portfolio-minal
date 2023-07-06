import React, { useEffect, useState } from 'react'

const SearchItem = ({ search }) => {
    console.log(search)

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                search.map((movie) => {
                    return (
                        <div className="card">
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
                    )
                })
            }
        </div>
    )
}

export default SearchItem
