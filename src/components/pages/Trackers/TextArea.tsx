import { useState } from "react";
import { ButtonNext } from "styles/pages/Trackers/Buttons";
import { BtnNextContainer, Container, TextArea, TextAreaContainer, TextComponents } from "styles/pages/Trackers/TextArea";
import { TextDescription } from "styles/pages/Trackers/Trackers";
const ButtonsComponent = () => {
  const [eventText, setEventText] = useState<string>("");

  return (
    <TextArea>
      <TextDescription>Кратко опишите данное событие</TextDescription>
      <TextAreaContainer>
        <Container>
          <TextComponents onChange={(e) => setEventText(e.target.value.trimStart())} value={eventText} maxLength={300} placeholder="Сегодня произошла ситуация, когда..."></TextComponents>
        </Container>
        <BtnNextContainer>
          <ButtonNext $disabled={eventText.length === 0}>Далее</ButtonNext>
        </BtnNextContainer>
      </TextAreaContainer>
    </TextArea>
  );
};

export default ButtonsComponent;
