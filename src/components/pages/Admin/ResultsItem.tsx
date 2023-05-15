import {
  ResultsBlock,
  ResultsText,
  ResultsTextBlock,
  TextComponents,
  TextComponentsNumber,
  ResultsItems,
  NumbersBlock,
  TextBlock,
} from "styles/pages/Admin/ResultsItem";
import { ReactComponent as Trash } from "images/Admin/TrashQuestion.svg";
import { IQuestion } from "codebase/store/adminStore";
import { useContext } from "react";
import { AdminContext } from "./Editor";
import { observer } from "mobx-react-lite";

interface Props {
  question: IQuestion;
  index: number;
}

const ResultsItem = () => {

  const { adminStore } = useContext(AdminContext);

  return (
    <ResultsBlock>
      <ResultsTextBlock>
        <ResultsText>Результат 1</ResultsText>
        <Trash />
      </ResultsTextBlock>
      <ResultsItems style={{ marginTop: "0px" }}>
        <TextBlock>
          <TextComponents
            maxLength={200}
            placeholder="Описание"
            onChange={(e) => {}}
          />
        </TextBlock>
        <NumbersBlock>
          <TextComponentsNumber
            maxLength={5}
            placeholder="Значение от"
            onChange={(e) => {}}
          />
          <TextComponentsNumber
            maxLength={5}
            placeholder="Значение до"
            onChange={(e) => {}}
          />
        </NumbersBlock>
      </ResultsItems>
    </ResultsBlock>
  );
};

export default observer(ResultsItem);
