import { observer } from "mobx-react-lite";
import RecommendMovie, { IRecommendMovieMock } from "mockdata/RecommendMovie";
import { useState } from "react";
import ReactPlayer from "react-player";
import {
    DiagnTextBlack, ItemMovie, MovieBlock, MovieItemBlock, TextItemMovie
} from "styles/pages/MenuPages/Recommendations";


const Movie = () => {
  const [movies, setMovies] = useState<IRecommendMovieMock[]>(RecommendMovie);
  return (
    <MovieBlock>
      {movies.map((value, index) => (
        <MovieItemBlock key={index}>
          <ItemMovie>
            <ReactPlayer url={value.url} width="100%" height="100%" />
          </ItemMovie>
          <TextItemMovie>
            <DiagnTextBlack>{value.title}</DiagnTextBlack>
          </TextItemMovie>
        </MovieItemBlock>
      ))}
    </MovieBlock>
  );
};

export default observer(Movie)
