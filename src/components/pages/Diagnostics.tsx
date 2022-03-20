import {DiagHtml,DiagHeader,DiagBody,DiagFooter,DiagnMenu,DiagnText,DiagFooterItems,DiagnTextBlack,DiagnBlockImg,FooterItems,FooterItemsKGU,DiagnIcon,DiagnCP,DiagnTextDiagn,DiagnImg,DiagnBlock,DiagnTextProf,DiagnBlockText} from 'styles/pages/Diagnostics'
import {ReactComponent as Chat} from 'images/Chat_Conversation_Circle.svg';
import {ReactComponent as Prof} from 'images/UserCircle.svg';
import {ReactComponent as Start} from 'images/start.svg';
import Icon from 'images/icon.png';
import Diag1 from 'images/diag1.png';
import Diag2 from 'images/diag2.png';
import Diag3 from 'images/diag3.png';

import { useMediaQuery } from "react-responsive";

import { createGlobalStyle } from "styled-components";
import {Menu} from "components/pages/Menu";

const Diagnostics = () => {
    const isDesktop = useMediaQuery({
        query: "(max-width: 600px)"
      });
  return (
    <DiagHtml>
                {isDesktop ?
                <DiagHeader>
                    <DiagnIcon>
                        <img src={Icon} style={{"height" : "30px", "width" : "110px"}}/>
                    </DiagnIcon>
                    <DiagnCP> 
                        <Menu />
                    </DiagnCP>
                </DiagHeader>
                :
                <DiagHeader>
                    <DiagnIcon>
                        <img src={Icon} style={{"height" : "30px", "width" : "110px"}}/>
                    </DiagnIcon>
                    <DiagnMenu>
                        <DiagnText>Главная</DiagnText>
                        <DiagnTextBlack>Диагностика</DiagnTextBlack>
                        <DiagnText>Рекомендации</DiagnText>
                    </DiagnMenu>
                    <DiagnCP>
                        <Chat style={{"height" : "30px", "width" : "30px"}}/>
                        <Prof style={{"height" : "30px", "width" : "30px"}}/>
                    </DiagnCP>
            </DiagHeader>
                }
        <DiagBody>       
            <DiagnImg>
            <DiagnTextDiagn>Диагностика</DiagnTextDiagn>
                <DiagnBlock>
                <DiagnBlockImg>
                    <DiagnText>5 минут</DiagnText>
                    <img src={Diag1}/>
                </DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Профессиональное выгорание</DiagnTextProf>
                        <DiagnTextBlack>Проблему профессионального выгорания начали исследовать ещё в 70-х годах XX века. Психологи и медики, пришли к открытию «особой формы „стресса общения“», которую американский психиатр Х.Дж. Фрейденберг предложил называть «burnout» («выгорание»).</DiagnTextBlack>
                        <Start />
                    </DiagnBlockText>
                </DiagnBlock>
                <DiagnBlock>
                    <DiagnBlockImg>
                        <DiagnText>6-8 минут</DiagnText>
                        <img src={Diag2} />
                    </DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Копинг–поведение в стрессовых ситуациях</DiagnTextProf>
                        <DiagnTextBlack>Жизнь человека в современном обществе предполагает его существование и развитие в условиях крайней неопределенности. Особую актуальность приобретают вопросы, связанные с функционированием и выработкой личностью эффективных стратегий преодоления стрессовых ситуаций.</DiagnTextBlack>
                        <Start />
                    </DiagnBlockText>
                </DiagnBlock>
                <DiagnBlock>
                    <DiagnBlockImg>
                        <DiagnText>4 минуты</DiagnText>
                        <img src={Diag3} />
                    </DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Оценка признаков эмоционального выгорания</DiagnTextProf>
                        <DiagnTextBlack>Синдром эмоционального выгорания представляет собой состояние эмоционального, умственного истощения, физического утомления, возникающее в результате хронического стресса на работе.</DiagnTextBlack>
                        <Start />
                    </DiagnBlockText>
                </DiagnBlock>
            </DiagnImg>
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

export default Diagnostics;
