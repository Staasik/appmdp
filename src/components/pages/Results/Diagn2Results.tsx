import { useMediaQuery } from "react-responsive";

import { HomeTextBlock,ErrorBlock,ButtonBlock,DiagnTextBlack,ImgBlock,DiagnTextProfCenter,Result,ResultStaticItem,DiagnTextProf,TextBlock,Button,DiagnTextBlackBold,ResultsBlock,ResultItem,ResultLine} from 'styles/pages/Results/Diagn2Results';
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { ReactComponent as ErrorReg } from 'images/Results/ErrorReg.svg';
import { IUserData } from 'App'

interface Props{
    userData: IUserData | null
}

const Diagn2Results = ({ userData }: Props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 800px)"
    });
    return (
        <DiagHtml>
            <HomeTextBlock>          
                <TextBlock>
                    <DiagnTextProfCenter>Результат диагностики копинг–поведение в стрессовых ситуациях</DiagnTextProfCenter>
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
                        <DiagnTextBlackBold>Копинг, ориентированный на решение задачи, проблемы</DiagnTextBlackBold>
                        <DiagnTextProf style={{color:"#FF9254"}}>2 балл(ов) - средняя степень выраженности</DiagnTextProf>
                        <DiagnTextBlack>Базируется на стараниях человека усовершенствовать взаимоотношения с внешней средой с помощью изменения когнитивной оценки конкретной ситуации и представляет собой намеренные проблемно-фокусированные усилия по изменению ситуации, включающие аналитический подход к решению проблемы.</DiagnTextBlack>
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlackBold>Копинг, ориентированный на эмоции</DiagnTextBlackBold>
                        <DiagnTextProf style={{color:"#FF9254"}}>0 балл(ов) - низкая степень выраженности</DiagnTextProf>
                        <DiagnTextBlack>Содержит в себе такие мысли и действия, целью которых является снижение физического или психологического давления стресса.</DiagnTextBlack>
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlackBold>Копинг, ориентированный на избегание</DiagnTextBlackBold>
                        <DiagnTextProf style={{color:"#FF9254"}}>7 балл(ов) - высокая степень выраженности</DiagnTextProf>
                        <DiagnTextBlack>Характеризуется мысленным стремлением и поведенческими усилиями, направленными к бегству или избеганию проблемы.</DiagnTextBlack>
                    </ResultItem>
                    <Button style={{marginTop:"50px",alignSelf:"center"}}>Перейти в профиль</Button>
                </ResultLine>
                
            </ResultsBlock>
        </DiagHtml>
    );
}

export default Diagn2Results;
