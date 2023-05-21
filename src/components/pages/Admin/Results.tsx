import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import {
  DiagHtml,
  TextBlock,
  ButtonBack,
  AddText,
} from "styles/pages/Admin/Results";
import ResultsItem from "./ResultsItem";
import { ButtonAdd } from "styles/pages/Admin/DiagnosticsList";
import { ButtonSave } from "styles/pages/Admin/DiagnosticEditor";
import { useParams } from "react-router-dom";
import { AdminContext } from "./Editor";

interface Props {
  onClick(): void
}
const Results = ({ onClick }: Props) => {
  
  const { adminStore } = useContext(AdminContext)
  const { diagnosticData } = adminStore

  return (
    <DiagHtml>
      <TextBlock>
        <ButtonBack onClick={onClick}>Назад</ButtonBack>
      </TextBlock>
      <TextBlock>
        <AddText>Результаты</AddText>
        <ButtonSave onClick={() => { adminStore.saveDiagnosticData() }}>Сохранить</ButtonSave>
      </TextBlock>
      {
        diagnosticData?.options.map((option, idx) => <ResultsItem key={idx} option={option}/>)
      }
      <ButtonAdd onClick={() => { adminStore.addOption() }}>Добавить результат</ButtonAdd>
    </DiagHtml>
  );
};

export default observer(Results);
