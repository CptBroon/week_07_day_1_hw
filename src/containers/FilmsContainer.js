import {useState} from 'react'
import FilmsList from "../components/FilmsList"

const FilmsContainer = () => {

    const [films, setFilms] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    )

    return (
        <>
            <h1 id="title">Upcoming Film Releases for UK</h1>
            <hr/>
            <FilmsList films={films} />
            <hr/>
            <div className="flex" id="more-release-button-area">
                <a href='https://www.imdb.com/calendar/?region=gb' id="more-releases-button">
                    View more upcoming releases &gt;&gt;&gt;
                </a>
            </div>
            
        </>
    )
}

export default FilmsContainer