import { useMediaQuery } from "react-responsive";

import { HomeTextBlock,ButtonBlock,ImgBlock,TextBlock,Button,HomeBlock,ButtonWhite,DiagnTextBlackBold,TextBlockWhite,MenuBlock,MenuItem,MenuLine,TextUrl,ImgBlockDesktop,BlockDesk,BlockDeskText,FootBlock} from 'styles/pages/MenuPages/HomePage';
import { DiagHtml, DiagnTextBlack,DiagnTextWhite, DiagnTextProf,DiagnTextProfWhite } from 'styles/pages/Diagnostics/DiagnHeader';
import { ReactComponent as HomeRegUrl } from 'images/HomePage/HomeRegUrl.svg';
import { ReactComponent as HomeRecomendUrl } from 'images/HomePage/HomeRecomendUrl.svg';
import { ReactComponent as HomeUsrUrl } from 'images/HomePage/HomeUsrUrl.svg';
import { ReactComponent as HomeChatUrl } from 'images/HomePage/HomeChatUrl.svg';
import { ReactComponent as HomeDiagUrl } from 'images/HomePage/HomeDiagUrl.svg';
import { ReactComponent as Line } from 'images/HomePage/Line.svg';
import { IUserData } from 'App'

interface Props{
    userData: IUserData | null
}

const Diagnostics = ({ userData }: Props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 860px)"
    });
    return (
        <DiagHtml>
            {isDesktop ? 
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProf>Сервис для педагогов по саморегуляции</DiagnTextProf>
                    <DiagnTextBlack>Проходите диагностики, узнавайте новые книги и слушайте успокаивающую музыку на нашем сайте.</DiagnTextBlack>
                    <ButtonBlock>
                        <Button>Пройти диагностику</Button>
                        <HomeRegUrl/>
                </ButtonBlock>
                </TextBlock>    
                <ImgBlock/>             
            </HomeTextBlock>
            :
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProf>Сервис для педагогов по саморегуляции</DiagnTextProf>
                </TextBlock>  
                <ImgBlock/> 
                <ButtonBlock>
                    <Button>Пройти диагностику</Button>
                    <HomeRegUrl/>
                </ButtonBlock> 
            </HomeTextBlock>
            }
            <MenuBlock>
                <MenuLine>
                    <MenuItem>
                        <DiagnTextProf>Что есть на сайте?</DiagnTextProf>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Диагностика</TextUrl>
                        <DiagnTextBlack>Составленные психологами профессиональные тесты личности</DiagnTextBlack>
                        <HomeDiagUrl/>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Чат–бот</TextUrl>
                        <DiagnTextBlack>С вами может пообщаться наш виртуальный помощник</DiagnTextBlack>
                        <HomeChatUrl/>
                    </MenuItem>
                </MenuLine>
                <MenuLine>
                    <MenuItem>
                        <Line/>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Подборки</TextUrl>
                        <DiagnTextBlack>Предлагаем вам ознакомиться со списком интересных книг</DiagnTextBlack>
                        <HomeRecomendUrl/>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Аккаунт</TextUrl>
                        <DiagnTextBlack>Чтобы сохранить ваши результаты, нужно пройти регистрацию</DiagnTextBlack>
                        <HomeUsrUrl/>
                    </MenuItem>
                </MenuLine>
            </MenuBlock>
            <HomeBlock>
                <BlockDesk>
                    <DiagnTextProf>Как это работает?</DiagnTextProf>
                    <ImgBlockDesktop/>
                </BlockDesk>
                <BlockDeskText style={{gap:"10px"}}>
                    <DiagnTextBlackBold>Диагностика интересна, и поможет нам составить рекомендации на основе ваших результатов</DiagnTextBlackBold>
                    <DiagnTextBlack>- Вам предлагаются утверждения о переживаниях</DiagnTextBlack>
                    <DiagnTextBlack>- Вы можете ответить, выбрав картинку</DiagnTextBlack>
                    <DiagnTextBlack>- При затруднении вы можете обратиться к чат–боту</DiagnTextBlack>
                    <DiagnTextBlack>- После всех диагностик, у вас в профиле появится подробная статистка, исходя из результатов</DiagnTextBlack>
                    <DiagnTextBlack>- Всё использование сайта абсолютно бесплатно</DiagnTextBlack>
                    <Button>Пройти диагностику</Button>
                </BlockDeskText>
            </HomeBlock>
            <FootBlock>
                <TextBlockWhite>
                    <DiagnTextProfWhite>Гармония в работе начинается с саморегуляции </DiagnTextProfWhite>
                    <DiagnTextWhite>Присоединяйтесь к нашему сервису — мы поможем узнать всё о психологии для работы преподавателем</DiagnTextWhite>
                    <ButtonWhite>Зарегистрироваться</ButtonWhite>
                </TextBlockWhite>
            </FootBlock>
        </DiagHtml>
    );
}

export default Diagnostics;
