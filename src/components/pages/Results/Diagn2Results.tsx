import { IUserData } from 'App';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import image from "images/Results/diag2result.png";
import imagedesk from "images/Results/diag2result_600.png";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf, ResultItem, ResultLine, ResultsBlock } from 'styles/pages/Results/Diagn2Results';
import { IDiagnResult } from 'components/pages/Results/Diagn1Results'

interface Props {
    userData: IUserData | null,
    result: IDiagnResult[]
}

const Diagn2Results = ({ userData, result }: Props) => {

    const HeaderProps = {
        userData: userData,
        title: 'Результат диагностики копинг–поведение в стрессовых ситуациях',
        images: [image, imagedesk]
    }

    return (
        <DiagHtml>
            <DiagnResultsHeader {...HeaderProps} />
            <ResultsBlock>
                <ResultLine>
                    <ResultItem>
                        <DiagnTextBlackBold>Копинг, ориентированный на решение задачи, проблемы</DiagnTextBlackBold>
                        <DiagnTextProf style={{ color: "#FF9254" }}>2 балл(ов) - средняя степень выраженности</DiagnTextProf>
                        <DiagnTextBlack>Базируется на стараниях человека усовершенствовать взаимоотношения с внешней средой с помощью изменения когнитивной оценки конкретной ситуации и представляет собой намеренные проблемно-фокусированные усилия по изменению ситуации, включающие аналитический подход к решению проблемы.</DiagnTextBlack>
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlackBold>Копинг, ориентированный на эмоции</DiagnTextBlackBold>
                        <DiagnTextProf style={{ color: "#FF9254" }}>0 балл(ов) - низкая степень выраженности</DiagnTextProf>
                        <DiagnTextBlack>Содержит в себе такие мысли и действия, целью которых является снижение физического или психологического давления стресса.</DiagnTextBlack>
                    </ResultItem>
                    <ResultItem>
                        <DiagnTextBlackBold>Копинг, ориентированный на избегание</DiagnTextBlackBold>
                        <DiagnTextProf style={{ color: "#FF9254" }}>7 балл(ов) - высокая степень выраженности</DiagnTextProf>
                        <DiagnTextBlack>Характеризуется мысленным стремлением и поведенческими усилиями, направленными к бегству или избеганию проблемы.</DiagnTextBlack>
                    </ResultItem>
                    <Button style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
                </ResultLine>

            </ResultsBlock>
        </DiagHtml>
    );
}

export default Diagn2Results;
