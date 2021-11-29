import Films from "./Films";

const FilmsList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <Films name={film.name} key={film.id} url={film.url}/>
        )
    })

    return (
        <>
            <ul className="film-list flex">
                {filmNodes}
            </ul>
        </>
    )
};

export default FilmsList;