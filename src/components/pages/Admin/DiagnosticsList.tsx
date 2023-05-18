import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import {
  DiagHtml,
  TextBlock,
  AdminText,
  DiagnText,
  DiagnBlocks,
  DiagnBlockstItem,
  ImgBlockItem,
  DiagnTextItem,ButtonAdd,
} from "styles/pages/Admin/DiagnosticsList";
import diagnMock from "mockdata/diagnBlocksMock";
import DiagnosticItem from "./DiagnosticItem";
import { AdminContext } from "./Editor";


const DiagnosticsList = () => {

  const { adminStore } = useContext(AdminContext)

  const { diagnosticsList } = adminStore

  useEffect(() => {
    adminStore.getDiagnosticsList()
  }, [])
  

  return (
    <DiagHtml>
      <TextBlock>
        <AdminText>Администратор</AdminText>
      </TextBlock>
      <TextBlock>
        <DiagnText>Активные диагностики:</DiagnText>
      </TextBlock>
      <DiagnBlocks>
        {diagnMock.map((value, index) => (
          <DiagnBlockstItem>
            <ImgBlockItem src={value.image} />
            <DiagnTextItem>{value.name}</DiagnTextItem>
          </DiagnBlockstItem>
        ))}
      </DiagnBlocks>
      <TextBlock>
        <DiagnText>Черновики:</DiagnText>
      </TextBlock>
      <DiagnBlocks>
        {diagnosticsList.length !== 0 && 
          diagnosticsList.map((item, idx) =>{
            return(<DiagnosticItem key={idx} data={item}/>)
          })
        }
      </DiagnBlocks>
      <ButtonAdd onClick={() => {adminStore.createDiagnostic()}}>Добавить</ButtonAdd>
    </DiagHtml>
  );
};

export default observer(DiagnosticsList);
