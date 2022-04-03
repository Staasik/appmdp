import { IUserData } from 'App';
import Cookies from 'codebase/Cookies';
import CheckList from 'components/pages/UserProfile/CheckList';
import blockItemMock, { IblockItemMock } from 'mockdata/UserProfileBlocks';
import diagnItemMock, { IdiagnItemMock } from 'mockdata/UserProfileDiagnItem';
import { useState } from 'react';
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, ButtonBlock, ButtonWhite, DiagnCheckBlocks, DiagnResult, DiagnResultItem, DiagnTextBlack, DiagnTextBlackBoldName, DiagnTextProfCenter, HomeTextBlock, Img, TextBlock } from 'styles/pages/UserProfile/UserProfile';

interface Props {
    userData: IUserData | null
}

const UserProfile = ({ userData }: Props) => {
    const [items, setItems] = useState<IdiagnItemMock[]>(diagnItemMock)
    const [blocks, setBlocks] = useState<IblockItemMock[]>(blockItemMock)

    const Logout = () => {
        Cookies.deleteCookie("login")
        Cookies.deleteCookie("password")
        document.location.href = '/main'
    }

    return (
        <DiagHtml>
            <HomeTextBlock>
                <TextBlock>
                    <DiagnTextProfCenter>Здравствуйте, {userData?.name}</DiagnTextProfCenter>
                    <DiagnTextBlack>В личном кабинете появились новые чек-листы для вас</DiagnTextBlack>
                </TextBlock>
                <ButtonBlock>
                    <ButtonWhite onClick={() => Logout()}>Выйти</ButtonWhite>
                </ButtonBlock>
            </HomeTextBlock>
            <DiagnTextBlackBoldName>Результаты  диагностик:</DiagnTextBlackBoldName>
            <DiagnResult>
                {
                    items.map((value, index) =>
                        <DiagnResultItem key={index}>
                            <Img src={value.image} />
                            <DiagnTextBlack style={{ textAlign: "center" }}>{value.title}</DiagnTextBlack>
                            <Button to={`diagnresult${index + 1}`}>Посмотреть результат</Button>
                        </DiagnResultItem>
                    )
                }
            </DiagnResult>
            <DiagnTextBlackBoldName>Чек–листы:</DiagnTextBlackBoldName>
            <DiagnCheckBlocks>
                {
                    blocks.map((value, index) =>
                        <CheckList index={index} image={value.image} title={value.title} description={value.description} checklist={value.checklist} />
                    )
                }
            </DiagnCheckBlocks>
        </DiagHtml>
    );
}

export default UserProfile;