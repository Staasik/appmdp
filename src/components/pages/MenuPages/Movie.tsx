import { useState } from 'react';
import { MovieItemBlock,MovieBlock,TextItemMovie,ItemMovie,DiagnTextBlack} from 'styles/pages/MenuPages/Recommendations';
import ReactPlayer from "react-player"

import RecommendMovie, { IRecommendMovieMock } from 'mockdata/RecommendMovie';

const Movie = () => {
    const [movies, setMovies] = useState<IRecommendMovieMock[]>(RecommendMovie)
    return (
            <MovieBlock>
                {
                movies.map((value, index) =>
                <MovieItemBlock>
                    <ItemMovie>
                        <ReactPlayer url={value.url} width="100%"height="100%"/>
                    </ItemMovie>
                    <TextItemMovie>
                        <DiagnTextBlack>{value.title}</DiagnTextBlack>
                    </TextItemMovie>
                </MovieItemBlock>
                )
                }
            </MovieBlock>     
    );
}

export default Movie;