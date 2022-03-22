import { ReactComponent as Start } from 'images/start.svg';
import diagnMock from 'mockdata/diagnBlocksMock';
import { useMediaQuery } from "react-responsive";
import { DiagBody, DiagnBlock, DiagnBlockImg, DiagnBlockText, DiagnImg, DiagnText, DiagnTextBlack, DiagnTextDiagn, DiagnTextProf } from 'styles/pages/Diagnostics';

const Diagnostics = () => {
    const isDesktop = useMediaQuery({
        query: "(max-width: 600px)"
    });
    return (
            <DiagBody>
                <DiagnImg>
                    <DiagnTextDiagn>Диагностика</DiagnTextDiagn>
                    {
                        diagnMock.map((value) => {
                            return (
                                <DiagnBlock>
                                    <DiagnBlockImg>
                                        <DiagnText>{value.averageTime}</DiagnText>
                                        <img src={value.image} />
                                    </DiagnBlockImg>
                                    <DiagnBlockText>
                                        <DiagnTextProf>{value.name}</DiagnTextProf>
                                        <DiagnTextBlack>{value.description}</DiagnTextBlack>
                                        <Start />
                                    </DiagnBlockText>
                                </DiagnBlock>
                            )
                        })
                    }
                </DiagnImg>
            </DiagBody>
    );
}

export default Diagnostics;
