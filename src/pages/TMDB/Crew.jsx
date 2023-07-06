import Blog from '../../assets/images/blog.jpg';


const Crew = ({ cast }) => {
    return (
        <>
            <div className="profile">
                <div className="profile__img">
                    <img src={cast.profile_path === null ? Blog : `https://image.tmdb.org/t/p/original${cast.profile_path}`} alt="profile" />
                </div>
                <p>{cast.name}</p>
            </div>
        </>
    )
}

export default Crew