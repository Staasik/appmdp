import { IUserData } from 'App';
import { IDiagnResult2 } from 'codebase/DiagnResults';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import ResultBlock2 from 'components/pages/Results/ResultBlock2';
import image from "images/Results/diag2result.png";
import imagedesk from "images/Results/diag2result_600.png";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { Button, ResultLine, ResultsBlock } from 'styles/pages/Results/Diagn2Results';

interface Props {
    userData: IUserData | null,
    result: IDiagnResult2[]
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
                    {result.map((value, index) => <ResultBlock2 {...value} key={index} />)}
                    <Button href="/main/profile" style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
                </ResultLine>

            </ResultsBlock>
        </DiagHtml>
    );
}

export default Diagn2Results;
