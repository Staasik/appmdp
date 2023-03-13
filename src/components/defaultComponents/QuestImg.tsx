import { Image, ImageContainer, QuestNumImg, SelectedImage } from 'styles/defaultComponents/Quest';
import { DiagnTextBlackBoldI } from 'styles/pages/Diagnostics/DiagnHeader';

interface IProps {
  text: string,
  image: string,
  index: number,
  onChange({ ...args }: any): any,
  selected: boolean
}

const Quest = ({ text, image, index, onChange, selected }: IProps) => {

  return (
    <QuestNumImg index={index}>
      <DiagnTextBlackBoldI>{text}</DiagnTextBlackBoldI>
      <ImageContainer>
        {selected && <SelectedImage></SelectedImage>}
        <Image src={image} style={{ "height": "100%", "width": "99%"}} onClick={()=>{onChange(index)}}/>
      </ImageContainer>
    </QuestNumImg>

  );
}

export default Quest