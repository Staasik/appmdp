import { Context } from "index";
import { observer } from "mobx-react-lite";
import { ButtonsMock } from "mockdata/MoсkTacker";
import { useState, useContext, useEffect } from "react";
import { Wrapper, ButtonsContainer, Container, TrackButton } from "styles/pages/Trackers/Buttons";
import { TextDescription } from "styles/pages/Trackers/Trackers";

interface IPlace {
  decription: string;
  index: number;
}

const Buttons = ({ decription, index }: IPlace) => {
  const { store } =  useContext(Context)

  const handleClick = (idx: number) => {
    store.addNewAnswers(index, idx === store.trackerAnswers[index].value as number ? null : idx)
  };

  return (
    <Wrapper>
      <TextDescription>{decription}</TextDescription>
      <ButtonsContainer>
        <Container>
          {
            ButtonsMock.map(
              (data, idx) => <TrackButton key={idx} onClick={() => handleClick(idx)} $disabled={idx !== store.trackerAnswers[index].value as number}>{data}</TrackButton>
            )
          }
        </Container>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default observer(Buttons);
