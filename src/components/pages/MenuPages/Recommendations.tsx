import Books from "components/pages/MenuPages/Books";
import Movie from "components/pages/MenuPages/Movie";
import Music from "components/pages/MenuPages/Music";
import { observer } from "mobx-react-lite";
import { DiagHtml } from "styles/pages/Diagnostics/DiagnHeader";
import {
  DiagnTextBlackBold, DiagnTextProfCenter,
  TextBlock
} from "styles/pages/MenuPages/Recommendations";


const Recommendations = () => {

  return (
    <DiagHtml>
      <TextBlock>
        <DiagnTextProfCenter>Рекомендации</DiagnTextProfCenter>
      </TextBlock>
      <TextBlock>
        <a id="films"/>
        <DiagnTextBlackBold>Подборка фильмов</DiagnTextBlackBold>
      </TextBlock>
      <Movie />
      <TextBlock>
        <a id="playlists"/>
        <DiagnTextBlackBold>Подборка плейлистов</DiagnTextBlackBold>
      </TextBlock>
      <Music />
      <TextBlock>
        <a id="books"/>
        <DiagnTextBlackBold>Подборка книг</DiagnTextBlackBold>
      </TextBlock>
      <Books />
    </DiagHtml>
  );
};

export default observer(Recommendations)
