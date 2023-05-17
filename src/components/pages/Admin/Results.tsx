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

const Results = () => {
  return (
    <DiagHtml>
      <TextBlock>
        <ButtonBack href="">Назад</ButtonBack>
      </TextBlock>
      <TextBlock>
        <AddText>Результаты</AddText>
        <ButtonSave onClick={() => {}}>Сохранить</ButtonSave>
      </TextBlock>
      <ResultsItem />
      <ResultsItem />
      <ButtonAdd onClick={() => {}}>Добавить результат</ButtonAdd>
    </DiagHtml>
  );
};

export default observer(Results);
