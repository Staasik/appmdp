import { useMediaQuery } from "react-responsive";

import { HomeTextBlock,ErrorBlock,ButtonBlock,DiagnTextBlack,ImgBlock,DiagnTextProfCenter,Result,ResultStaticItem,DiagnTextProf,TextBlock,Button,DiagnTextBlackBold,ResultsBlock,ResultItem,ResultLine} from 'styles/pages/Results/Diagn3Results';
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { ReactComponent as ErrorReg } from 'images/Results/ErrorReg.svg';
import { IUserData } from 'App';
import { ReactComponent as Line } from 'images/Results/Line.svg';

interface Props{
    userData: IUserData | null
}

const Diagn3Results = ({ userData }: Props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });
    return (
        <DiagHtml>
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProfCenter>Результат оценки признаков эмоционального выгорания</DiagnTextProfCenter>
                    <ButtonBlock>
                        <ErrorBlock><ErrorReg/></ErrorBlock>
                        <Button>Зарегистрироваться</Button>
                    </ButtonBlock>
                </TextBlock>    
                <ImgBlock/>             
            </HomeTextBlock>
            <ResultsBlock>      
                <ResultLine>
                    <ResultItem>
                        <DiagnTextBlack>1 блок: Поведение</DiagnTextBlack>
                        <DiagnTextBlackBold>6 балл(ов) - низкий уровень изменений</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{height:"15px",width:"100%",marginBottom:"15px"}}/>}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>2 блок: Мышление</DiagnTextBlack>
                        <DiagnTextBlackBold>1 балл(ов) - низкий уровень изменений</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{height:"15px",width:"100%",marginBottom:"15px"}}/>}
                    </ResultItem>
                </ResultLine>
                <ResultLine>        
                    <ResultItem>
                        <DiagnTextBlack>3 блок: Чувства</DiagnTextBlack>
                        <DiagnTextBlackBold>11 балл(ов) - средний  уровень изменений</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{height:"15px",width:"100%",marginBottom:"15px"}}/>}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>4 блок: Здоровье</DiagnTextBlack>
                        <DiagnTextBlackBold>28 балл(ов) - высокий уровень изменений</DiagnTextBlackBold>
                    </ResultItem>           
                </ResultLine>
            </ResultsBlock> 
            <HomeTextBlock>
            <Button style={{marginTop:"50px",alignSelf:"center"}}>Перейти в профиль</Button>
            </HomeTextBlock>       
        </DiagHtml>
    );
}

export default Diagn3Results;
