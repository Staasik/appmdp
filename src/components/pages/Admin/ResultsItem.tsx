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
import { IOption, IQuestion } from "codebase/store/adminStore";
import { useContext } from "react";
import { AdminContext } from "./Editor";
import { observer } from "mobx-react-lite";

interface Props {
  option: IOption
}

const ResultsItem = ({option}:Props) => {

  const { adminStore } = useContext(AdminContext);

  return (
    <ResultsBlock>
      <ResultsTextBlock>
        <ResultsText>Результат {option.tempid}</ResultsText>
        <Trash onClick={() =>  adminStore.deleteOption(option.tempid)}/>
      </ResultsTextBlock>
      <ResultsItems style={{ marginTop: "0px" }}>
        <TextBlock>
          <TextComponents
            maxLength={200}
            value={option.description}
            placeholder="Описание"
            onChange={(e) => { adminStore.changeOptionsDiscription(e.target.value, option.tempid)}}
          />
        </TextBlock>
        <NumbersBlock>
          <TextComponentsNumber
            type="number"
            value={option.minValue}
            placeholder="Значение от"
            onChange={(e) => {adminStore.changeOptionsValues(+e.target.value, option.tempid, 'min')}}
          />
          <TextComponentsNumber
            type="number"
            value={option.maxValue}
            placeholder="Значение до"
            onChange={(e) => {adminStore.changeOptionsValues(+e.target.value, option.tempid, 'max')}}
          />
        </NumbersBlock>
      </ResultsItems>
    </ResultsBlock>
  );
};

export default observer(ResultsItem);
