import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, Container, TextAreaWrapper, TextAreaContainer, TextComponents } from "styles/pages/Trackers/TextArea";
import { TextDescription } from "styles/pages/Trackers/Trackers";

interface IPlace {
  placetext: string;
  decription: string;
  index: number;
}

const TextArea = ({ placetext, decription, index }: IPlace) => {
  const { store } =  useContext(Context)

  const handleChange = (value: string) =>{
    store.addNewAnswers(index, value.length === 0 ? null : value)
  }

  
  return (
    <TextAreaWrapper>
      <TextDescription>{decription}</TextDescription>
      <TextAreaContainer>
        <Container>
          <TextComponents
            onChange={(e) => handleChange(e.target.value.trimStart())} 
            value={store.trackerAnswers[index].value == null ? '' : store.trackerAnswers[index].value + ''} 
            maxLength={300} 
            placeholder={placetext}
          />
        </Container>
      </TextAreaContainer>
    </TextAreaWrapper>
  );
};

export default observer(TextArea);
