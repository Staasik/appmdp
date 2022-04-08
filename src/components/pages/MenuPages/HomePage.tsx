import { IUserData } from 'App';
import { ReactComponent as HomeChatUrl } from 'images/HomePage/HomeChatUrl.svg';
import { ReactComponent as HomeDiagUrl } from 'images/HomePage/HomeDiagUrl.svg';
import { ReactComponent as HomeRecomendUrl } from 'images/HomePage/HomeRecomendUrl.svg';
import { ReactComponent as HomeRegUrl } from 'images/HomePage/HomeRegUrl.svg';
import { ReactComponent as HomeUsrUrl } from 'images/HomePage/HomeUsrUrl.svg';
import { ReactComponent as Line } from 'images/HomePage/Line.svg';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import { DiagHtml, DiagnTextBlack, DiagnTextProf,DiagnTextProfS, DiagnTextProfWhite, DiagnTextWhite } from 'styles/pages/Diagnostics/DiagnHeader';
import { BlockDesk, BlockDeskText, Button, ButtonBlock, ButtonWhite, DiagnTextBlackBold, DiagnTextProfCenter, FootBlock, HomeBlock, HomeTextBlock, ImgBlock, ImgBlockDesktop, MenuBlock, MenuItem, MenuLine, TextBlock, TextBlockWhite, TextUrl } from 'styles/pages/MenuPages/HomePage';

interface Props{
    userData: IUserData | null,
    onOpenChat(): any
}

const Diagnostics = ({ userData, onOpenChat }: Props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 860px)"
    });
    return (
        <DiagHtml>
            {isDesktop ? 
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProfCenter>Сервис для педагогов по саморегуляции</DiagnTextProfCenter>
                    <DiagnTextBlack>Проходите диагностики, узнавайте новые книги и слушайте успокаивающую музыку на нашем сайте.</DiagnTextBlack>
                    <ButtonBlock>
                        <Button href="/main/diagnostics">Пройти диагностику</Button>
                        {!userData && <Link to="/reg"><HomeRegUrl/></Link>}
                </ButtonBlock>
                </TextBlock>    
                <ImgBlock/>             
            </HomeTextBlock>
            :
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProfCenter>Сервис для педагогов по саморегуляции</DiagnTextProfCenter>
                </TextBlock>  
                <ImgBlock/> 
                <ButtonBlock>
                    <Button href="/main/diagnostics">Пройти диагностику</Button>
                    {!userData && <Link to="/reg"><HomeRegUrl/></Link>}
                </ButtonBlock> 
            </HomeTextBlock>
            }
            <MenuBlock>
                <MenuLine>
                    <MenuItem>
                        <DiagnTextProfS>Что есть на сайте?</DiagnTextProfS>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Диагностика</TextUrl>
                        <DiagnTextBlack>Составленные психологами профессиональные тесты личности</DiagnTextBlack>
                        <a href="/main/diagnostics"><HomeDiagUrl/></a>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Чат–бот</TextUrl>
                        <DiagnTextBlack>С вами может пообщаться наш виртуальный помощник</DiagnTextBlack>
                        <HomeChatUrl style={{cursor: 'pointer'}} onClick={() => onOpenChat()}/>
                    </MenuItem>
                </MenuLine>
                <MenuLine>
                {isDesktop && <MenuItem style={{alignSelf: 'flex-end', paddingBottom: '8px'}}><Line/></MenuItem>}
                    <MenuItem>
                        <TextUrl>Подборки</TextUrl>
                        <DiagnTextBlack>Предлагаем вам ознакомиться со списком интересных книг</DiagnTextBlack>
                        <a href="/main/recommend"><HomeRecomendUrl/></a>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Аккаунт</TextUrl>
                        <DiagnTextBlack>Чтобы сохранить ваши результаты, нужно пройти регистрацию</DiagnTextBlack>
                        <a href="/reg"><HomeUsrUrl/></a>
                    </MenuItem>
                </MenuLine>
            </MenuBlock>
            <HomeBlock>
                <BlockDesk>
                    <DiagnTextProf>Как это работает?</DiagnTextProf>
                    <ImgBlockDesktop/>
                </BlockDesk>
                <BlockDeskText style={{gap:"15px"}}>
                    <DiagnTextBlackBold>Диагностика интересна, и поможет нам составить рекомендации на основе ваших результатов</DiagnTextBlackBold>
                    <DiagnTextBlack>• Вам предлагаются утверждения о переживаниях</DiagnTextBlack>
                    <DiagnTextBlack>• Вы можете ответить, выбрав картинку</DiagnTextBlack>
                    <DiagnTextBlack>• При затруднении вы можете обратиться к чат–боту</DiagnTextBlack>
                    <DiagnTextBlack>• После всех диагностик, у вас в профиле появится подробная статистка, исходя из результатов</DiagnTextBlack>
                    <DiagnTextBlack>• Всё использование сайта абсолютно бесплатно</DiagnTextBlack>
                    <Button href="/main/diagnostics">Пройти диагностику</Button>
                </BlockDeskText>
            </HomeBlock>
            <FootBlock>
                <TextBlockWhite>
                    <DiagnTextProfWhite>Гармония в работе начинается с саморегуляции </DiagnTextProfWhite>
                    <DiagnTextWhite>Присоединяйтесь к нашему сервису — мы поможем узнать всё о психологии для работы преподавателем</DiagnTextWhite>
                    {!userData && <ButtonWhite href="/reg">Зарегистрироваться</ButtonWhite>}
                </TextBlockWhite>
            </FootBlock>
        </DiagHtml>
    );
}

export default Diagnostics;
