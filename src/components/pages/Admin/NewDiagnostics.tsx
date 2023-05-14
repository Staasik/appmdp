import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import {
  DiagHtml,
  AddText,
  TextBlock,
  ButtonBack,
  ButtonSave,
  DiagnText,
  QuestionText,
  TextComponents,
  QuestionBlock,
  QuestionTextBlock,
  SelectAdd,
} from "styles/pages/Admin/NewDiagnostics";
import { ReactComponent as Trash } from "images/Admin/TrashQwest.svg";
import { targets } from "mockdata/MockAdminSelect";
import colors from "utils/colors";

const Description = [
  {
    name: "Название диагностики",
    placeholder: "Введите название для нового теста...",
  },
  {
    name: "Описание",
    placeholder: "Введите описание для нового теста...",
  },
  {
    name: "Варианты ответов",
    placeholder: "Введите описание вариантов ответа для теста...",
  },
];

const NewDiagnostics = () => {
  return (
    <DiagHtml>
      <TextBlock>
        <ButtonBack>Назад</ButtonBack>
      </TextBlock>
      <TextBlock>
        <AddText>Добавление новой диагностики</AddText>
        <ButtonSave>Сохранить</ButtonSave>
      </TextBlock>
      <QuestionBlock>
        {Description.map((data, index) => (
          <>
            <TextBlock>
              <DiagnText>{data.name}</DiagnText>
            </TextBlock>
            <TextComponents maxLength={200} placeholder={data.placeholder} />
          </>
        ))}
      </QuestionBlock>
      <QuestionBlock style={{ background: colors.ALICE_BLUE2 }}>
        <QuestionTextBlock>
          <QuestionText>Вопрос 1</QuestionText>
          <Trash />
        </QuestionTextBlock>
        <TextComponents
          maxLength={200}
          placeholder="Введите заголовок для вопроса теста..."
        />
        <TextBlock>
          <DiagnText>Сколько пунктов должно отображаться для ответа?</DiagnText>
        </TextBlock>
        <TextBlock style={{ marginTop: "0px" }}>
          <SelectAdd options={targets} placeholder="Выберете количество" />
        </TextBlock>
      </QuestionBlock>
    </DiagHtml>
  );
};

export default NewDiagnostics;
