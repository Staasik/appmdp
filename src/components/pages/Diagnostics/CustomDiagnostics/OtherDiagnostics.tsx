import { IDiagnItem } from 'codebase/store/adminStore';
import { ReactComponent as Start } from 'images/start.svg';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { useContext, useState, useEffect } from 'react';
import { DiagnAllBlock, DiagnBlockText, DiagnImage, DiagnImg, DiagnLink, DiagnTextBlack, DiagnTextDiagn, DiagnTextProfD } from 'styles/pages/Diagnostics/DiagnHeader';
import { DiagBody, DiagnBlockImg } from 'styles/pages/Diagnostics/Diagnostic';

const OtherDiagnostics = () => {

    const { store } = useContext(Context)
    const [list, setList] = useState<IDiagnItem[]>([])

    useEffect(() => {
      store.getDiagnosticsList().then((data) =>{
        data && setList(data)
      })
    }, [])
    

    return (
        <DiagBody>
            <DiagnImg>
                <DiagnTextDiagn>Другие тесты</DiagnTextDiagn>
                {
                    list.map((data, index) =>
                        <DiagnAllBlock key={index}>
                            <DiagnBlockImg>
                                <DiagnImage src={data.image} />
                            </DiagnBlockImg>
                            <DiagnBlockText>
                                <DiagnTextProfD>{data.title}</DiagnTextProfD>
                                <DiagnTextBlack>{data.description}</DiagnTextBlack>
                                <DiagnLink href={`custom/${data.id}`}><Start /></DiagnLink>
                            </DiagnBlockText>
                        </DiagnAllBlock>
                    )
                }
            </DiagnImg>
        </DiagBody>
    );
}

export default observer(OtherDiagnostics)
