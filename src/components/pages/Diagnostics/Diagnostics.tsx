import { ReactComponent as Start } from 'images/start.svg';
import diagnMock, { IdiagnMock } from 'mockdata/diagnBlocksMock';
import { useState } from 'react';
import { DiagBody, DiagnBlockImg } from 'styles/pages/Diagnostics/Diagnostic';
import { DiagnBlockText, DiagnAllBlock, DiagnTextProfD,DiagnImage, DiagnImg, DiagnLink, DiagnText, DiagnTextBlack, DiagnTextDiagn, DiagnTextProf } from 'styles/pages/Diagnostics/DiagnHeader'

const Diagnostics = () => {

    const [blocks, setBlocks] = useState<IdiagnMock[]>(diagnMock)

    return (
        <DiagBody>
            <DiagnImg>
                <DiagnTextDiagn>Диагностика</DiagnTextDiagn>
                {
                    blocks.map((value, index) =>
                        <DiagnAllBlock key={index}>
                            <DiagnBlockImg>
                                <DiagnText>{value.averageTime}</DiagnText>
                                <DiagnImage src={value.image} />
                            </DiagnBlockImg>
                            <DiagnBlockText>
                                <DiagnTextProfD>{value.name}</DiagnTextProfD>
                                <DiagnTextBlack>{value.description}</DiagnTextBlack>
                                <DiagnLink href={"diagnostics/diagnostic" + (index + 1)}><Start /></DiagnLink>
                            </DiagnBlockText>
                        </DiagnAllBlock>
                    )
                }
            </DiagnImg>
        </DiagBody>
    );
}

export default Diagnostics;
