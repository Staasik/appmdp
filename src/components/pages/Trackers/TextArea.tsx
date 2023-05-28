import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Container, TextAreaContainer, TextAreaWrapper, TextComponents } from "styles/pages/Trackers/TextArea";
import { TextDescription } from "styles/pages/Trackers/Trackers";

interface IPlace {
  placetext: string;
  decription: string;
  index: number;
}

const TextArea = ({ placetext, decription, index }: IPlace) => {
  const { store } = useContext(Context)

  const handleChange = (value: string) => {
    store.setTrackerAnswers(index, value.length === 0 ? null : value)
  }


  return (
    <TextAreaWrapper>
      <TextDescription>{decription}</TextDescription>
      <TextAreaContainer>
        <Container>
          <TextComponents
            onChange={(e) => handleChange(e.target.value.trimStart())}
            value={store.tempTrackerAnswers[index].value == null ? '' : store.tempTrackerAnswers[index].value + ''}
            maxLength={300}
            placeholder={placetext}
          />
        </Container>
      </TextAreaContainer>
    </TextAreaWrapper>
  );
};

export default observer(TextArea);
