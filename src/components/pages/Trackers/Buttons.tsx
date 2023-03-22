import { ButtonsMock } from "mockdata/MoсkTacker";
import { useState } from "react";
import { BtnNextContainer, ButtonNext, Buttons, ButtonsContainer, Container, TrackButton } from "styles/pages/Trackers/Buttons";
import { TextDescription } from "styles/pages/Trackers/Trackers";

interface IPlace {
  decription: string;
}

const ButtonsComponent = ({decription}:IPlace) => {
  const [selectedBtnIdx, setSelectedBtnIdx] = useState<number>(-1);

  const Click = (index: number) => {
    if (index === selectedBtnIdx) {
      setSelectedBtnIdx(-1);
    } else {
      setSelectedBtnIdx(index);
    }
  };

  return (
    <Buttons>
      <TextDescription>{decription}</TextDescription>
      <ButtonsContainer>
        <Container>
          {
            ButtonsMock.map((data, index) => (<TrackButton key={index} onClick={() => Click(index)} $disabled={index !== selectedBtnIdx}>{data}</TrackButton>
          ))}
        </Container>
        <BtnNextContainer>
          <ButtonNext $disabled={selectedBtnIdx === -1}>Далее</ButtonNext>
        </BtnNextContainer>
      </ButtonsContainer>
    </Buttons>
  );
};

export default ButtonsComponent;
