import { IUserData } from 'App';
import { IDiagnResult2 } from 'codebase/DiagnResults';
import DiagnResultsHeader from 'components/pages/Results/DiagnResultsHeader';
import ResultBlock2 from 'components/pages/Results/ResultBlock2';
import image from "images/Results/diag2result.png";
import imagedesk from "images/Results/diag2result_600.png";
import { DiagHtml } from 'styles/pages/Diagnostics/DiagnHeader';
import { DiscriptionImageCont, DiscriptionPS, DiscriptionContainer, Discription, DiscTitle, DiscContent, Button, RecommendWrapper, ResultLine, ResultsBlock, HomeTextBlock } from 'styles/pages/Results/Diagn2Results';
import DiagnRecommends from 'components/defaultComponents/DiagnRecommends'
import { ReactComponent as Alert } from 'images/Results/Alert.svg'

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
                </ResultLine>
            </ResultsBlock>
            <Discription>
                <DiscTitle>Описание</DiscTitle>
                <DiscriptionContainer>
                    <DiscContent>С позиции вашего работодателя идеальной поведенческой стратегией является проблемно-ориентированный копинг.</DiscContent>
                    <DiscContent>• Однако для Вашего состояния – это опасный путь. Невозможность расслабиться, отвлечься и снизить тревожность может привести к снижению степени эмоционального благополучия. При таком подходе важно научиться отвлекаться от проблемной ситуации, не забирать работу домой. Четкий режим дня и планирование помогут избежать переутомления.</DiscContent>
                    <DiscContent>• Если тест показал высокий уровень эмоционально-ориентированного копинга, то будет важно разобраться в его причинах. Повышенная импульсивность может быть, как врожденной чертой, так и симптомом повышенной тревожности.</DiscContent>
                    <DiscContent>• Избегание – защитный механизм, запускающий абстрагирование от проблемы. Человек переключается на другие дела, игнорируя критическое. Такой подход снижает нагрузку на нервную систему, предохраняя ее от перенапряжения. Это профилактика депрессии. Отрицательной чертой копинга избегания является замораживание проблемы, бездействие.</DiscContent>
                </DiscriptionContainer>
                <DiscriptionPS>
                    <DiscriptionImageCont>
                        <Alert/>
                    </DiscriptionImageCont>
                    Помните, что эффективность той или иной стратегии зависит от особенностей актуальной ситуациии имеющихся личностных ресурсов.
                </DiscriptionPS>
            </Discription>
            <RecommendWrapper>
                <DiagnRecommends></DiagnRecommends>
            </RecommendWrapper>
            <HomeTextBlock>
                <Button href="/main/profile" style={{ marginTop: "50px", alignSelf: "center" }}>Перейти в профиль</Button>
            </HomeTextBlock>
        </DiagHtml>
    );
}

export default Diagn2Results;
