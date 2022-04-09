import { IUserData } from 'App';
import { ReactComponent as HomeChatUrl } from 'images/HomePage/HomeChatUrl.svg';
import { ReactComponent as HomeDiagUrl } from 'images/HomePage/HomeDiagUrl.svg';
import { ReactComponent as HomeRecomendUrl } from 'images/HomePage/HomeRecomendUrl.svg';
import { ReactComponent as HomeRegUrl } from 'images/HomePage/HomeRegUrl.svg';
import { ReactComponent as HomeUsrUrl } from 'images/HomePage/HomeUsrUrl.svg';
import { ReactComponent as Line } from 'images/HomePage/Line.svg';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import { DiagHtml, DiagnTextBlack, DiagnTextProf, DiagnTextProfS,DiagnTextBlackI, DiagnTextBlackItem,DiagnTextProfWhite, DiagnTextWhite } from 'styles/pages/Diagnostics/DiagnHeader';
import { BlockDesk, BlockDeskText, Button, ButtonBlock, ButtonWhite, DiagnTextBlackBold, DiagnTextProfCenter, FootBlock, HomeBlock, HomeTextBlock, ImgBlock, ImgBlockDesktop, MenuBlock, MenuItem, MenuLine, TextBlock, TextBlockWhite, TextUrl } from 'styles/pages/MenuPages/HomePage';

interface Props {
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
                        <DiagnTextBlack style={{ lineHeight: '1.8', width: '75%' }}>Если вы чувствуете усталость и снижение интереса к своей работе, хотите мыслить иначе, освоить навыки управления своим эмоциональным состоянием и повысить уровень осознанности.</DiagnTextBlack>
                        <ButtonBlock>
                            <Button href="/main/diagnostics">Пройти диагностику</Button>
                            {!userData && <Link to="/reg"><HomeRegUrl /></Link>}
                        </ButtonBlock>
                    </TextBlock>
                    <ImgBlock />
                </HomeTextBlock>
                :
                <HomeTextBlock>
                    <TextBlock>
                        <DiagnTextProfCenter>Сервис для педагогов по саморегуляции</DiagnTextProfCenter>
                    </TextBlock>
                    <ImgBlock />
                    <ButtonBlock>
                        <Button href="/main/diagnostics">Пройти диагностику</Button>
                        {!userData && <Link to="/reg"><HomeRegUrl /></Link>}
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
                        <DiagnTextBlackItem>Составленные психологами профессиональные тесты личности</DiagnTextBlackItem>
                        <a href="/main/diagnostics"><HomeDiagUrl /></a>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Чат–бот</TextUrl>
                        <DiagnTextBlackItem>С вами может пообщаться наш виртуальный помощник</DiagnTextBlackItem>
                        <HomeChatUrl style={{ cursor: 'pointer' }} onClick={() => onOpenChat()} />
                    </MenuItem>
                </MenuLine>
                <MenuLine>
                    {isDesktop && <MenuItem style={{ alignSelf: 'flex-end', paddingBottom: '8px' }}><Line /></MenuItem>}
                    <MenuItem>
                        <TextUrl>Подборки</TextUrl>
                        <DiagnTextBlackItem>Предлагаем вам ознакомиться со списком интересных книг</DiagnTextBlackItem>
                        <a href="/main/recommend"><HomeRecomendUrl /></a>
                    </MenuItem>
                    <MenuItem>
                        <TextUrl>Аккаунт</TextUrl>
                        <DiagnTextBlackItem>Чтобы сохранить ваши результаты, нужно пройти регистрацию</DiagnTextBlackItem>
                        <a href="/reg"><HomeUsrUrl /></a>
                    </MenuItem>
                </MenuLine>
            </MenuBlock>
            <HomeBlock>
                <BlockDesk>
                    <DiagnTextProf>Как это работает?</DiagnTextProf>
                    <ImgBlockDesktop />
                </BlockDesk>
                <BlockDeskText style={{ gap: "15px" }}>
                    <DiagnTextBlackBold>Диагностика интересна, и поможет нам составить рекомендации на основе ваших результатов</DiagnTextBlackBold>
                    <DiagnTextBlackI>• Вам предлагаются утверждения о переживаниях</DiagnTextBlackI>
                    <DiagnTextBlackI>• Вы можете ответить, выбрав картинку</DiagnTextBlackI>
                    <DiagnTextBlackI>• При затруднении вы можете обратиться к чат–боту</DiagnTextBlackI>
                    <DiagnTextBlackI>• После всех диагностик, у вас в профиле появится подробная статистка, исходя из результатов</DiagnTextBlackI>
                    <DiagnTextBlackI>• Всё использование сайта абсолютно бесплатно</DiagnTextBlackI>
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
