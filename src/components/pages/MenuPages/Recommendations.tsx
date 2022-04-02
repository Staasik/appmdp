import { IUserData } from 'App';
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { MusicBlock,Music,DiagnTextProfCenter,TextBlock,DiagnTextBlackBold} from 'styles/pages/MenuPages/Recommendations';

import Books from 'components/pages/MenuPages/Books'
import Movie from 'components/pages/MenuPages/Movie'

interface Props{
    userData: IUserData | null
}

const Recommendations = ({ userData }: Props) => {
    return (
        <DiagHtml>
            <TextBlock>
                <DiagnTextProfCenter>Рекомендации</DiagnTextProfCenter>
            </TextBlock>
            <TextBlock>
                <DiagnTextBlackBold>Подборка фильмов</DiagnTextBlackBold>
            </TextBlock>
            <Movie/>
            <TextBlock>
                <DiagnTextBlackBold>Подборка плейлистов</DiagnTextBlackBold>
            </TextBlock>
            <MusicBlock>
                <Music/>
                <Music/>
                <Music/>
                <Music/>
            </MusicBlock>
            <TextBlock>
                <DiagnTextBlackBold>Подборка книг</DiagnTextBlackBold>
            </TextBlock>
            <Books/>
        </DiagHtml>         
    );
}

export default Recommendations;
