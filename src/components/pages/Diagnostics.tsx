import { ReactComponent as Start } from 'images/start.svg';
import diagnMock, { IdiagnMock } from 'mockdata/diagnBlocksMock';
import { useState } from 'react';
import { DiagBody, DiagnBlock, DiagnBlockImg, DiagnBlockText, DiagnImage, DiagnImg, DiagnLink, DiagnText, DiagnTextBlack, DiagnTextDiagn, DiagnTextProf } from 'styles/pages/Diagnostics';

const Diagnostics = () => {

    const [blocks, setBlocks] = useState<IdiagnMock[]>(diagnMock)

    return (
        <DiagBody>
            <DiagnImg>
                <DiagnTextDiagn>Диагностика</DiagnTextDiagn>
                {
                    blocks.map((value, index) =>
                        <DiagnBlock key={index}>
                            <DiagnBlockImg>
                                <DiagnText>{value.averageTime}</DiagnText>
                                <DiagnImage src={value.image} />
                            </DiagnBlockImg>
                            <DiagnBlockText>
                                <DiagnTextProf>{value.name}</DiagnTextProf>
                                <DiagnTextBlack>{value.description}</DiagnTextBlack>
                                <DiagnLink to={"diagnostic" + (index + 1)}><Start /></DiagnLink>
                            </DiagnBlockText>
                        </DiagnBlock>
                    )
                }
            </DiagnImg>
        </DiagBody>
    );
}

export default Diagnostics;
