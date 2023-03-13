import { useState } from "react";
import { Music, MusicBlock } from "styles/pages/MenuPages/Recommendations";

import RecommendMusic, { IRecommendMusicMock } from "mockdata/RecommendMusic";

const Movie = () => {
  const [musics, setMusics] = useState<IRecommendMusicMock[]>(RecommendMusic);
  return (
    <MusicBlock>
      {musics.map((value, index) => (
        <Music key={index}>
          <iframe
            style={{ border: "none", width: "100%", height: "100%" }}
            src={value.src}
          >
            Слушайте <a href={value.playlisthref}>Йога</a> —{" "}
            <a href={value.bloghref}>Яндекс Музыка</a> на Яндекс.Музыке
          </iframe>
        </Music>
      ))}
    </MusicBlock>
  );
};

export default Movie
