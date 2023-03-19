import Choise from "components/pages/Trackers/Choise";
import _ from "lodash";
import { data } from "mockdata/MoskTrackersSelect";
import { useState } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, Choises, ChoisesContainer, UserChoises } from "styles/pages/Trackers/Choise";
import { TextDescription } from "styles/pages/Trackers/Trackers";
interface IAnswer {
  value: number;
  label: number;
}

const ChoiseComponent = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [completeDisabled, setCompleteDisabled] = useState<boolean>(true);

  const onChange = (index: number, answer: IAnswer) => {
    let tempAnswers = answers;
    tempAnswers[index] = answer.value;
    setAnswers(tempAnswers);
    if (
      tempAnswers.length > 0 &&
      !_.some(tempAnswers, (el) => el == undefined)
    ) {
      setCompleteDisabled(false);
    } else {
      setCompleteDisabled(true);
    }
  };

  return (
    <UserChoises>
      <TextDescription>Выберете одну или несколько эмоций, которые вы испытывали в данной ситуации и оцените их интенсивность по шкале от 0 до 10</TextDescription>
      <ChoisesContainer>
        <Choises>
            {
              data.map((value, index) => {
                return (<Choise text={value.text} options={value.options} index={index} onChange={(answer) => {onChange(index, answer);}}/>
                );
            })}
        </Choises>
        <BtnNextContainer>
            <ButtonNext $disabled={completeDisabled}>Далее</ButtonNext>
          </BtnNextContainer>
      </ChoisesContainer>
    </UserChoises>
  );
};

export default ChoiseComponent;
