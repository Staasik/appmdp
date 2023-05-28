import { defaultOption } from "codebase/store/store";
import Choise from "components/pages/Trackers/Choise";
import { Context } from "index";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { targets, targetsText } from "mockdata/MoсkTrackersSelect";
import { useState, useContext, useEffect } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, ChoisesWrapper, ChoisesContainer, UserChoises } from "styles/pages/Trackers/Choise";
import { TextDescription } from "styles/pages/Trackers/Trackers";

export interface IAnswer {
  value: number | null;
  label: number;
}
interface IPlace {
  decription: string;
  index: number;
}

const Choises = ({ decription, index }: IPlace) => {
  const { store } = useContext(Context)

  const addEmotion = () => {
    store.setTrackerAnswers(index,[...store.tempTrackerAnswers[index].value as Array<IAnswer>, defaultOption]);
  }

  const removeEmotion = (idx: number) => {
    if ((store.tempTrackerAnswers[index].value as Array<IAnswer>).length > 1) {
      let tempAnswers = store.tempTrackerAnswers[index].value as Array<IAnswer>;
      tempAnswers.splice(idx, 1)
      store.setTrackerAnswers(index, tempAnswers);
    }
  }

  const onChange = (idx: number, answer: IAnswer) => {
    let tempAnswers = (store.tempTrackerAnswers[index].value as Array<IAnswer>);
    tempAnswers[idx] = answer;
    store.setTrackerAnswers(index, tempAnswers)
  };


  return (
    <UserChoises>
      <TextDescription>{decription}</TextDescription>
      <ChoisesWrapper>
        <ChoisesContainer>
          {
            (store.tempTrackerAnswers[index].value as Array<IAnswer>).map((value, idx) => <Choise
              key={idx}
              value={value}
              text={targetsText}
              options={targets}
              onChange={(answer) => onChange(idx, answer)}
              addEmotion={() => addEmotion()}
              removeEmotion={() => removeEmotion(idx)}
            />
            )
          }
        </ChoisesContainer>
      </ChoisesWrapper>
    </UserChoises>
  );
};

export default observer(Choises);
