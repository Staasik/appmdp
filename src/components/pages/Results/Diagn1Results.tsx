import { useMediaQuery } from "react-responsive";

import { HomeTextBlock,ErrorBlock,ButtonBlock,DiagnTextProfCenter,ImgBlock,DiagnTextBlack,Result,ResultStaticItem,TextBlock,Button,DiagnTextBlackBold,ResultsBlock,ResultItem,ResultLine} from 'styles/pages/Results/Diagn1Results';
import { DiagHtml, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader';
import { ReactComponent as Line } from 'images/Results/Line.svg';
import { ReactComponent as ErrorReg } from 'images/Results/ErrorReg.svg';
import { ReactComponent as Ellipse } from 'images/Results/Ellipse.svg';
import { IUserData } from 'App'

interface Props{
    userData: IUserData | null
}

const Diagn1Results = ({ userData }: Props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });
    return (
        <DiagHtml>
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProfCenter>Результат диагностики профессиональное выгорание</DiagnTextProfCenter>
                    <ButtonBlock>
                        <ErrorBlock><ErrorReg/></ErrorBlock>
                        <Button>Зарегистрироваться</Button>
                    </ButtonBlock>
                </TextBlock>    
                <ImgBlock/>             
            </HomeTextBlock>
            <ResultsBlock>
                <Result>
                    <DiagnTextBlackBold style={{height:"50px"}}>Интегральный показатель выгорания:</DiagnTextBlackBold>
                    <DiagnTextProf style={{color:"#5496FF"}}>6 балл(ов) - средняя степень</DiagnTextProf>
                    {isDesktop && <Line style={{height:"50px",width:"80%"}}/>}
                </Result>         
                <ResultLine>
                    {!isDesktop && <Line style={{height:"15px",width:"100%"}}/>}
                    <ResultItem>
                        <DiagnTextBlack>Эмоциональное истощение</DiagnTextBlack>
                        <DiagnTextBlackBold>Высокий уровень</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{height:"15px",width:"100%"}}/>}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>Редукция личных достижений</DiagnTextBlack>
                        <DiagnTextBlackBold>Низкий уровень</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{height:"15px",width:"100%"}}/>}
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlack>Деперсонализация</DiagnTextBlack>
                        <DiagnTextBlackBold>Средний уровень</DiagnTextBlackBold>
                        {!isDesktop && <Line style={{height:"15px",width:"100%"}}/>}
                    </ResultItem>
                </ResultLine>
            </ResultsBlock>
            <ResultsBlock>
                <ResultLine>
                    <ResultStaticItem>
                        <Ellipse style={{width:"20px",marginTop:"8px",marginRight:"10px"}}/>
                        <DiagnTextBlack>Эмоциональное истощение проявляется в ощущениях эмоционального перенапряжения, усталости, исчерпанности эмоциональных ресурсов.</DiagnTextBlack>
                    </ResultStaticItem>
                    <ResultStaticItem>
                        <Ellipse style={{width:"20px",marginTop:"8px",marginRight:"10px"}}/>
                        <DiagnTextBlack>Деперсонализация представляет собой негативное, циничное, бездушное отношение к субъектам образовательного процесса.</DiagnTextBlack>
                    </ResultStaticItem>
                    <ResultStaticItem>
                        <Ellipse style={{width:"20px",marginTop:"8px",marginRight:"10px"}}/>
                        <DiagnTextBlack>Редукция персональных достижений проявляется в снижении чувства компетентности в своей работе, негативном самовосприятии в профессиональном плане.</DiagnTextBlack>
                    </ResultStaticItem>
                </ResultLine>
            </ResultsBlock>
        </DiagHtml>
    );
}

export default Diagn1Results;
