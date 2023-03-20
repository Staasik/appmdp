import Choise from "components/pages/Trackers/Choise";
import _ from "lodash";
import { targets, targetsText } from "mockdata/MoсkTrackersSelect";
import { useState } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, Choises, ChoisesContainer, UserChoises } from "styles/pages/Trackers/Choise";
import { TextDescription } from "styles/pages/Trackers/Trackers";

export interface IAnswer {
  value: number | null;
  label: number;
}


export const defaultOption: IAnswer = { value: null, label: 0 }

const ChoiseComponent = () => {
  const [answers, setAnswers] = useState<IAnswer[]>([defaultOption]);
  const [completeDisabled, setCompleteDisabled] = useState<boolean>(true);

  const addEmotion = () => {
    setAnswers(a => [...a, defaultOption]);
  }

  const removeEmotion = (index: number) => {
    if (answers.length > 1) {
      let tempAnswers = answers;
      tempAnswers.splice(index, 1)
      setAnswers([...tempAnswers]);
    }
  }

  const onChange = (index: number, answer: IAnswer) => {
    let tempAnswers = answers;
    tempAnswers[index] = answer;
    setAnswers([...tempAnswers]);
    setCompleteDisabled(!(tempAnswers.length > 0 && !_.some(tempAnswers, (el) => el == undefined)));
  };

  return (
    <UserChoises>
      <TextDescription>Выберете одну или несколько эмоций, которые вы испытывали в данной ситуации и оцените их интенсивность по шкале от 0 до 10</TextDescription>
      <ChoisesContainer>
        <Choises>
          {
            answers.map((value, index) => <Choise
              key={index}
              value={value}
              text={targetsText}
              options={targets}
              onChange={(answer) => onChange(index, answer)}
              addEmotion={() => addEmotion()}
              removeEmotion={() => removeEmotion(index)}
            />
            )
          }
        </Choises>
        <BtnNextContainer>
          <ButtonNext $disabled={completeDisabled}>Далее</ButtonNext>
        </BtnNextContainer>
      </ChoisesContainer>
    </UserChoises>
  );
};

export default ChoiseComponent;
