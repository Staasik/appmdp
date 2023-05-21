import { ReactComponent as Start } from 'images/start.svg';
import { Context } from 'index';
import { data, data1 } from 'mockdata/DiagnMockData';
import diagnMock, { IdiagnMock } from 'mockdata/diagnBlocksMock';
import { useContext, useState } from 'react';
import { DiagnAllBlock, DiagnBlockText, DiagnImage, DiagnImg, DiagnLink, DiagnTextBlack, DiagnTextDiagn, DiagnTextProfD } from 'styles/pages/Diagnostics/DiagnHeader';
import { DiagBody, DiagnBlockImg } from 'styles/pages/Diagnostics/Diagnostic';

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
