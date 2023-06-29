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
  TextComponents,
  DescriptionBlock,
  SelectAdd, ResultsBlock, ResultsText, ResultsButton,
} from "styles/pages/Admin/DiagnosticEditor";
import { targets } from "mockdata/MockAdminSelect";
import { useParams } from "react-router";
import { AdminContext } from "./Editor";
import QuestionItem from "./QuestionItem";
import { ButtonAdd } from "styles/pages/Admin/DiagnosticsList";
import { IOptions } from "mockdata/MoсkTrackersSelect";
import AdminStore, { IDiagnData, IOption } from "codebase/store/adminStore";
import { ReactComponent as ResultImg } from 'images/Admin/ResultImg.svg';
import { ReactComponent as ResultImg1000 } from 'images/Admin/ResultImg1000.svg';
import { useMediaQuery } from "react-responsive";
import Results from "./Results";
import { Snackbar, Alert } from "@mui/material";

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

const DiagnosticEditor = () => {

  const isDesktop = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  const { id } = useParams()

  const { adminStore } = useContext(AdminContext)
  const { diagnosticData, answersOption, isSaved, isError, optionsError } = adminStore
  const [stage, setStage] = useState(true)

  useEffect(() => {
    id && adminStore.getDiagnosticData(+id)
  }, [])

  return (<>
    <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center" }} open={isSaved} autoHideDuration={6000} onClose={() => adminStore.setIsSaved(false)}>
        <Alert onClose={() => adminStore.setIsSaved(false)} severity="success">Сохранение прошло успешно!</Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center" }} open={isError} autoHideDuration={6000} onClose={() => adminStore.setIsError(false)}>
        <Alert onClose={() => adminStore.setIsError(false)} severity="error">При сохранении произошла ошибка!</Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center" }} open={!!optionsError} autoHideDuration={6000} onClose={() => adminStore.setOptionsError(false)}>
        <Alert onClose={() => adminStore.setOptionsError(false)} severity="error">{optionsError}</Alert>
      </Snackbar>
      {
        stage ?<DiagHtml>
        <TextBlock>
          <ButtonBack href="../diagnostics">Назад</ButtonBack>
        </TextBlock>
        <TextBlock>
          <AddText>Добавление новой диагностики</AddText>
          <ButtonSave onClick={() => { adminStore.saveDiagnosticData() }}>Сохранить</ButtonSave>
        </TextBlock>
        <DescriptionBlock>
          <TextBlock>
            <DiagnText>{Description[0].name}</DiagnText>
          </TextBlock>
          <TextComponents maxLength={50} placeholder={Description[0].placeholder} value={diagnosticData?.title} onChange={(e) => { adminStore.setTitle(e.target.value) }} />
          <TextBlock>
            <DiagnText>{Description[1].name}</DiagnText>
          </TextBlock>
          <TextComponents maxLength={200} placeholder={Description[1].placeholder} value={diagnosticData?.description} onChange={(e) => { adminStore.setDescription(e.target.value) }} />
          <TextBlock>
            <DiagnText>{Description[2].name}</DiagnText>
          </TextBlock>
          <TextComponents maxLength={200} placeholder={Description[2].placeholder} value={diagnosticData?.answersDescription} onChange={(e) => { adminStore.setAnswersDescription(e.target.value) }} />
        </DescriptionBlock>
        <ResultsBlock>
          {isDesktop ? <ResultImg1000 style={{ width: "100%" }} /> : <ResultImg />}
          <ResultsText>Определите, как будет происходить обработка результатов:</ResultsText>
          <ResultsButton onClick={() => setStage(false)}>Обработка результата</ResultsButton>
        </ResultsBlock>
        <TextBlock>
          <DiagnText>Сколько пунктов должно отображаться для ответа?</DiagnText>
        </TextBlock>
        <TextBlock style={{ marginTop: "0px" }}>
          <SelectAdd
            isSearchable={false}
            options={targets}
            placeholder="Выберете количество"
            value={answersOption ? targets[answersOption - 2] : undefined}
            onChange={(opt) => { adminStore.setAnswersOption(+(opt as IOptions).label) }}
          />
        </TextBlock>
        {diagnosticData?.questions.map((question, idx) => {
          return (
            <QuestionItem key={idx} index={idx} question={question} />
          )
        })}
        <ButtonAdd onClick={() => { adminStore.addQuestion() }}>Добавить вопрос</ButtonAdd>
      </DiagHtml> :
      <Results onClick={() => setStage(true)} />
      }
  </>)
};

export default observer(DiagnosticEditor);
