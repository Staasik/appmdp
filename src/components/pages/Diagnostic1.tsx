import {DiagHtml,DiagHeader,DiagBody,DiagFooter,DiagnMenu,DiagnText,DiagnTextBlackBold,Button,DiagnTextBlack,QuestItem,QuestNum,DiagnBlockImg,FooterItems,FooterItemsKGU,DiagnIcon,DiagnCP,DiagnTextDiagn,DiagnImg,DiagnBlock,DiagnTextProf,DiagnBlockText} from 'styles/pages/Diagnostic1'
import {ReactComponent as Chat} from 'images/Chat_Conversation_Circle.svg';
import {ReactComponent as Prof} from 'images/UserCircle.svg';
import {ReactComponent as Start} from 'images/start.svg';
import Icon from 'images/icon.png';
import Diag1 from 'images/diag1.png';
import Diag2 from 'images/diag2.png';
import Diag3 from 'images/diag3.png';

import {data} from 'mockdata/mocktest1'

import React, { useState } from "react";
import Select from 'react-select';

import Quest from 'components/pages/Quest'



const Diagnostic1 = () => {
    
  return (
    <DiagHtml>
        <DiagHeader>
            <DiagnIcon>
                <img src={Icon} style={{"height" : "20%", "width" : "20%"}}/>
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
        <DiagBody>
            <DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Профессиональное выгорание</DiagnTextProf>
                        <DiagnTextBlack>Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе.</DiagnTextBlack>
                        <DiagnTextBlackBold>Варианты ответов: от 0 – никогда до 6 – ежедневно</DiagnTextBlackBold>
                    </DiagnBlockText>
            </DiagnBlockImg>
            <DiagnBlock>
                    {data.map((value,index)=>{ 
                        return(
                            <Quest text={value.text} options={value.options} index={index}/>
                        )
                    })}
                    <Button>Завершить</Button>
            </DiagnBlock>
            
        </DiagBody>
        <DiagFooter>
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
            <FooterItemsKGU>
                <DiagnText>© 2022 Команда Костромского Государственного Университета. Все права защищены.</DiagnText>
            </FooterItemsKGU>
        </DiagFooter>
    </DiagHtml>
  );
}

export default Diagnostic1;
