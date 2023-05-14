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
  DescriptionBlock,
  QuestionTextBlock,
  SelectAdd,
} from "styles/pages/Admin/NewDiagnostics";
import { ReactComponent as Trash } from "images/Admin/TrashQwest.svg";
import { targets } from "mockdata/MockAdminSelect";
import colors from "utils/colors";
import { useParams } from "react-router";
import { AdminContext } from "./Editor";
import QuestionItem from "./QuestionItem";
import { ButtonAdd } from "styles/pages/Admin/ActiveDiagnostics";
import { IOptions } from "mockdata/MoсkTrackersSelect";
import { IDiagnData } from "codebase/store/adminStore";

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

const DescriptionEnum = [
  'title',
  'description',
  'answersDescription'
]


const DiagnosticEditor = () => {

  const { id } = useParams()

  const { adminStore } = useContext(AdminContext)
  const { diagnosticData, answersOption } = adminStore

  useEffect(() => {
    id && adminStore.getDiagnosticData(+id)
  }, [])

  const [option, setOption] = useState(answersOption)


  return (
    <DiagHtml>
      <TextBlock>
        <ButtonBack href="../diagnostics">Назад</ButtonBack>
      </TextBlock>
      <TextBlock>
        <AddText>Добавление новой диагностики</AddText>
        <ButtonSave onClick={() =>{ console.log(adminStore.diagnosticData as IDiagnData)}}>Сохранить</ButtonSave>
      </TextBlock>
      <DescriptionBlock>
        <TextBlock>
          <DiagnText>{Description[0].name}</DiagnText>
        </TextBlock>
        <TextComponents maxLength={50} placeholder={Description[0].placeholder} value={diagnosticData?.title}  onChange={(e) => {adminStore.setTitle(e.target.value)}}/>
        <TextBlock>
          <DiagnText>{Description[1].name}</DiagnText>
        </TextBlock>
        <TextComponents maxLength={200} placeholder={Description[1].placeholder} value={diagnosticData?.description} onChange={(e) => {adminStore.setDescription(e.target.value)}}/>
        <TextBlock>
          <DiagnText>{Description[2].name}</DiagnText>
        </TextBlock>
        <TextComponents maxLength={200} placeholder={Description[2].placeholder} value={diagnosticData?.answersDescription} onChange={(e) => {adminStore.setAnswersDescription(e.target.value)}}/>
      </DescriptionBlock>
      <TextBlock>
        <DiagnText>Сколько пунктов должно отображаться для ответа?</DiagnText>
      </TextBlock>
      <TextBlock style={{ marginTop: "0px" }}>
        <SelectAdd options={targets} placeholder="Выберете количество" value={option} onChange={(opt) => { adminStore.setAnswersOption(+(opt as IOptions).label) }} />
      </TextBlock>
      {diagnosticData?.questions.map((question, idx) => {
        return (
          <QuestionItem key={idx} question={question} index={idx} />
        )
      })}
      <ButtonAdd onClick={() => { adminStore.addQuestion() }}>Добавить вопрос</ButtonAdd>
    </DiagHtml>
  );
};

export default observer(DiagnosticEditor);
