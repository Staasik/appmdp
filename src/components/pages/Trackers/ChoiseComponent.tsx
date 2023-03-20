import Choise from "components/pages/Trackers/Choise";
import _ from "lodash";
import { IOptions, targets, targetsText } from "mockdata/MoсkTrackersSelect";
import { useState } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, Choises, ChoisesContainer, UserChoises } from "styles/pages/Trackers/Choise";
import { TextDescription } from "styles/pages/Trackers/Trackers";

export interface IAnswer {
  value: number;
  label: number;
}


export const defaultOption: IAnswer = {value:0, label: 0}

const ChoiseComponent = () => {
  const [answers, setAnswers] = useState<IAnswer[]>([defaultOption]);
  const [completeDisabled, setCompleteDisabled] = useState<boolean>(true);

  const addEmotion = () => {
    setAnswers(a => [...a, defaultOption]);
  }

  const removeEmotion = (index: number) =>{
    let tempAnswers = answers;
    tempAnswers.splice(index,1)
    console.log(tempAnswers)
    setAnswers([...tempAnswers]);
  }

  const onChange = (index: number, answer: IAnswer) => {
    let tempAnswers = answers;
    tempAnswers[index] = answer;
    setAnswers([...tempAnswers]);
    setCompleteDisabled(!(tempAnswers.length > 0 && !_.some(tempAnswers, (el) => el == undefined)));
    console.log(tempAnswers)
  };

  return (
    <UserChoises>
      <TextDescription>Выберете одну или несколько эмоций, которые вы испытывали в данной ситуации и оцените их интенсивность по шкале от 0 до 10</TextDescription>
      <ChoisesContainer>
        <Choises>
            {
              answers.map((value,index) => <Choise
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
