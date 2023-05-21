import { ReactComponent as PSIcon } from 'images/PSIcon.svg';
import { ReactComponent as Start } from 'images/start.svg';
import { Context } from 'index';
import diagnMock, { IdiagnMock } from 'mockdata/diagnBlocksMock';
import { useContext, useState } from 'react';
import { DiagnAllBlock, DiagnBlockText, DiagnImage, DiagnImg, DiagnLink, DiagnRecBlock, DiagnRecBlockWrapper, DiagnRecButton, DiagnRecButtons, DiagnRecContent, DiagnRecPS, DiagnRecTitle, DiagnText, DiagnTextBlack, DiagnTextDiagn, DiagnTextProfD } from 'styles/pages/Diagnostics/DiagnHeader';
import { DiagBody, DiagnBlockImg, ButtonTest } from 'styles/pages/Diagnostics/Diagnostic';
import {data, data1} from 'mockdata/DiagnMockData';

const OtherDiagnostics = () => {

    const { store } = useContext(Context)
    const { isAuth } = store
    const [blocks, setBlocks] = useState<IdiagnMock[]>(diagnMock)

    return (
        <DiagBody>
            <DiagnImg>
                <DiagnTextDiagn>Другие тесты</DiagnTextDiagn>
                {
                    data1.map((value, index) =>
                        <DiagnAllBlock key={index}>
                            <DiagnBlockImg>
                                <DiagnImage src={data.image} />
                            </DiagnBlockImg>
                            <DiagnBlockText>
                                <DiagnTextProfD>{data.title}</DiagnTextProfD>
                                <DiagnTextBlack>{data.description}</DiagnTextBlack>
                                <DiagnLink href="OneOtherDiagnostic"><Start /></DiagnLink>
                            </DiagnBlockText>
                        </DiagnAllBlock>
                    )
                }
            </DiagnImg>
        </DiagBody>
    );
}

export default OtherDiagnostics
