import { DiagHtml, DiagHeader, DiagBody, DiagFooter, DiagnMenu, DiagnText, DiagnTextBlackBold, Button, DiagFooterItems, DiagnTextBlack, DiagnBlockImg, FooterItems, FooterItemsKGU, DiagnIcon, DiagnCP, DiagnBlock, DiagnTextProf, DiagnBlockText } from 'styles/pages/Diagnostic2'
import { ReactComponent as Chat } from 'images/Chat_Conversation_Circle.svg';
import { ReactComponent as Prof } from 'images/UserCircle.svg';

import Icon from 'images/icon.png';

import { data } from 'mockdata/mocktest2'
import QuestImg from 'components/pages/QuestImg'

import { useMediaQuery } from "react-responsive";
import { Menu } from "components/pages/Menu";

const Diagnostic2 = () => {
    const isDesktop = useMediaQuery({
        query: "(max-width: 600px)"
    });
    return (
        <DiagHtml>
            {isDesktop ?
                <DiagHeader>
                    <DiagnIcon>
                        <img src={Icon} style={{ "height": "30px", "width": "110px" }} />
                    </DiagnIcon>
                    <DiagnCP>
                        <Menu />
                    </DiagnCP>
                </DiagHeader>
                :
                <DiagHeader>
                    <DiagnIcon>
                        <img src={Icon} style={{ "height": "30px", "width": "110px" }} />
                    </DiagnIcon>
                    <DiagnMenu>
                        <DiagnText>Главная</DiagnText>
                        <DiagnTextBlack>Диагностика</DiagnTextBlack>
                        <DiagnText>Рекомендации</DiagnText>
                    </DiagnMenu>
                    <DiagnCP>
                        <Chat style={{ "height": "30px", "width": "30px" }} />
                        <Prof style={{ "height": "30px", "width": "30px" }} />
                    </DiagnCP>
                </DiagHeader>
            }
            <DiagBody>
                <DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Копинг–поведение в стрессовых ситуациях</DiagnTextProf>
                        <DiagnTextBlack>Перед вами будут появляться изображения с возможными реакциями человека на различные трудные, огорчающие или стрессовые ситуации. </DiagnTextBlack>
                        <DiagnTextBlackBold>Выберите одну реакцию из двух, которая в большей степени отображает Ваше поведение в трудной стрессовой ситуации нажатием на изображение.</DiagnTextBlackBold>
                    </DiagnBlockText>
                </DiagnBlockImg>
                <DiagnBlock>
                    {data.map((value, index) => {
                        return (
                            <QuestImg text={value.text} options={value.options} index={index} />
                        )
                    })}
                </DiagnBlock>
                <Button>Завершить</Button>
            </DiagBody>
            <DiagFooter>
                <DiagFooterItems>
                    <FooterItems>
                        <DiagnTextBlack>Главная</DiagnTextBlack>
                        <DiagnTextBlack>Диагностика</DiagnTextBlack>
                        <DiagnTextBlack>Новости</DiagnTextBlack>
                        <DiagnTextBlack>Рекомендации</DiagnTextBlack>
                    </FooterItems>
                    <FooterItems>
                        <DiagnTextBlack>Чек-листы</DiagnTextBlack>
                        <DiagnTextBlack>Фильмы</DiagnTextBlack>
                        <DiagnTextBlack>Книги</DiagnTextBlack>
                    </FooterItems>
                </DiagFooterItems>
                <FooterItemsKGU>
                    <DiagnText>© 2022 Команда Костромского Государственного Университета. Все права защищены.</DiagnText>
                </FooterItemsKGU>
            </DiagFooter>
        </DiagHtml>
    );
}

export default Diagnostic2;
