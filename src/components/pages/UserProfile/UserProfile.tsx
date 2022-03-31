import { IUserData } from 'App';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import image from "images/Results/diag2result.png";
import imagedesk from "images/Results/diag2result_600.png";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import {} from 'styles/pages/UserProfile/UserProfile';
import { useMediaQuery } from "react-responsive";
import { Button, ButtonBlock,DiagnTextBlack, DiagnTextProfCenter, ErrorBlock, HomeTextBlock, ImgBlock, TextBlock } from 'styles/pages/Results/Diagn1Results';
import {ButtonWhite} from 'styles/pages/MenuPages/HomePage';

interface Props {
    userData: IUserData | null
}

const UserProfile = ({ userData }: Props) => {

    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });

    return (
        <DiagHtml>
        <HomeTextBlock>
            <TextBlock>
                <DiagnTextProfCenter>Здравствуйте, Имя пользователя</DiagnTextProfCenter>
                <DiagnTextBlack>В личном кабинете появились новые чек-листы для вас</DiagnTextBlack>
                <ButtonBlock>
                        <ButtonWhite>Выйти</ButtonWhite>
                </ButtonBlock>
            </TextBlock>
        </HomeTextBlock>
        </DiagHtml>
    );
}

export default UserProfile;