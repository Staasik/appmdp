import Choise from "components/pages/Trackers/Choise";
import _ from "lodash";
import {  IOptions, targets, targetsText } from "mockdata/MoсkTrackersSelect";
import { useState } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, Choises, ChoisesContainer, UserChoises } from "styles/pages/Trackers/Choise";
import { TextDescription } from "styles/pages/Trackers/Trackers";

export interface IAnswer {
  value: number;
  label: number;
}

interface ITest {
  text:IOptions[],
  options:IOptions[],
}

const defaultOption: ITest = {text:targetsText, options: targets}

const ChoiseComponent = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [completeDisabled, setCompleteDisabled] = useState<boolean>(true);
  const [options, setOptions] = useState<ITest[]>([defaultOption])

  const addEmotion = () => {
    setOptions(a => [...a, defaultOption])
  }

  const removeEmotion = (index: number) =>{
    setOptions([...options.slice(0, index), ...options.slice(index + 1)])
  }

  const onChange = (index: number, answer: IAnswer) => {
    let tempAnswers = answers;
    tempAnswers[index] = answer.value;
    setAnswers(tempAnswers);
    setCompleteDisabled(!(tempAnswers.length > 0 && !_.some(tempAnswers, (el) => el == undefined)));
  };

  return (
    <UserChoises>
      <TextDescription>Выберете одну или несколько эмоций, которые вы испытывали в данной ситуации и оцените их интенсивность по шкале от 0 до 10</TextDescription>
      <ChoisesContainer>
        <Choises>
            {
              options.map((value, index) => {
                return (<Choise 
                  text={value.text} 
                  options={value.options} 
                  index={index} 
                  onChange={(answer) => onChange(index, answer)} 
                  addEmotion={addEmotion}
                  removeEmotion={() => removeEmotion(index)}
                  
                  />
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
