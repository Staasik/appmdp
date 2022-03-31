import { IUserData } from 'App';
import { useState } from 'react';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import {DiagnResult,ButtonBlock,Button,ImgBlockItem,ItemBlockCheck,Img,BlocksChecks,BlockstItemChecks,DiagnTextBlackBoldName,DiagnCheckBlockstItemText,ImgBlock,DiagnResultItem,DiagnCheckBlockstItem,DiagnTextBlackBold,DiagnTextBlack,DiagnCheckBlocks,DiagnTextProfCenter,HomeTextBlock,TextBlock,ButtonWhite} from 'styles/pages/UserProfile/UserProfile';
import { useMediaQuery } from "react-responsive";

import { ReactComponent as Dislike } from 'images/UserProfile/Dislike.svg';
import { ReactComponent as Caret_Right } from 'images/UserProfile/Caret_Right.svg';
import { ReactComponent as Line } from 'images/Results/Line.svg';

import diagnItemMock, { IdiagnItemMock } from 'mockdata/UserProfileDiagnItem';
import blockItemMock, { IblockItemMock } from 'mockdata/UserProfileBlocks';
import data1, { ICheck } from 'mockdata/UserProfileCheck';
import data2 from 'mockdata/UserProfileCheck';
import data4 from 'mockdata/UserProfileCheck';
import data3 from 'mockdata/UserProfileCheck';

import UncheckedIcon from 'images/UserProfile/CheckNull.png'
import CheckedIcon from 'images/UserProfile/CheckYes.png'
import CheckList from 'components/pages/UserProfile/CheckList'
interface Props {
    userData: IUserData | null
}

const UserProfile = ({ userData }: Props) => {
    const [items, setItems] = useState<IdiagnItemMock[]>(diagnItemMock)
    const [blocks, setBlocks] = useState<IblockItemMock[]>(blockItemMock)
    const [block1, setBlock1] = useState<ICheck[]>(data1)
    const [block2, setBlock2] = useState<ICheck[]>(data2)
    const [block3, setBlock3] = useState<ICheck[]>(data3)
    const [block4, setBlock4] = useState<ICheck[]>(data4)
    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });

    return (
        <DiagHtml>
        <HomeTextBlock>
            <TextBlock>
                <DiagnTextProfCenter>Здравствуйте, Имя пользователя</DiagnTextProfCenter>
                <DiagnTextBlack>В личном кабинете появились новые чек-листы для вас</DiagnTextBlack>
            </TextBlock>
            <ButtonBlock>
                    <ButtonWhite>Выйти</ButtonWhite>
            </ButtonBlock>
        </HomeTextBlock>
        <DiagnTextBlackBoldName>Результаты  диагностик:</DiagnTextBlackBoldName>
        <DiagnResult>  
            {
                items.map((value, index) =>
                <DiagnResultItem key={index}>
                    <Img src={value.image}/>
                    <DiagnTextBlack style={{textAlign:"center"}}>{value.title}</DiagnTextBlack>
                    <Button>Посмотреть результат</Button>
                </DiagnResultItem>
                )
            }
        </DiagnResult>
        <DiagnTextBlackBoldName>Чек–листы:</DiagnTextBlackBoldName>
        <DiagnCheckBlocks>
        {
                blocks.map((value, index) =>
                <CheckList index={index} image={value.image} title={value.title} description={value.description} checklist={value.checklist}/>
                )
            }
        </DiagnCheckBlocks>   
        </DiagHtml>
    );
}

export default UserProfile;