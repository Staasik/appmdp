import {DiagHtml,DiagHeader,DiagBody,DiagFooter,DiagnMenu,TextFive,DiagnText,BlockFive,DiagnTextBlackBold,DiagFooterItems,Button,DiagnTextBlack,DiagnBlockImg,FooterItems,FooterItemsKGU,DiagnIcon,DiagnCP,DiagnBlock,DiagnTextProf,DiagnBlockText} from 'styles/pages/Diagnostic3'
import {ReactComponent as Chat} from 'images/Chat_Conversation_Circle.svg';
import {ReactComponent as Prof} from 'images/UserCircle.svg';

import Icon from 'images/icon.png';

import {data,blockdata} from 'mockdata/mocktest3'
import QuestFive from 'components/pages/QuestFive'

import { useMediaQuery } from "react-responsive";
import {Menu} from "components/pages/Menu";

const Diagnostic3 = () => {
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
            <DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Оценка признаков эмоционального выгорания</DiagnTextProf>
                        <DiagnTextBlack>Вам предлагается по 5 утверждений из каждого блока: поведение, мышление, чувства и здоровье. Пожалуйста, прочитайте следующие утверждения и выберите тот вариант ответа, который наилучшим образом отражает Ваше мнение.</DiagnTextBlack>
                        <DiagnTextBlackBold>Варианты ответов: от 0 – никогда до 6 – ежедневно</DiagnTextBlackBold>
                    </DiagnBlockText>
            </DiagnBlockImg>
            <DiagnBlock>
                {
                    blockdata.map((value,idx)=> {
                        return (     
                            <BlockFive>
                                <TextFive>{value.text}</TextFive>
                                {data.slice(idx*5,idx*5+5).map((value,index)=>{ 
                                    return(
                                        <QuestFive text={value.text} options={value.options} index={index}/>
                                    )
                                })}
                            </BlockFive>
                        )
                    }   )       
                }
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

export default Diagnostic3;
