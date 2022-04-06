import {
  BlocksChecks,
  BlockstItemChecks,
  DiagnCheckBlockstItem,
  DiagnCheckBlockstItemText,
  DiagnTextBlack,
  DiagnTextBlackBold,
  CheckedImg,
  ImgBlockItem,
  UncheckedImg,
  ItemBlockCheck,
  IconWrapper
} from "styles/pages/UserProfile/UserProfile";
import { ICheck } from "mockdata/UserProfileCheck";
import { useState } from "react";
import {Caret,Button} from 'styles/pages/UserProfile/CheckList'
import { ReactComponent as File_Download } from "images/UserProfile/File_Download.svg";


interface Props {
  image: string;
  title: string;
  description: string;
  checklist: ICheck[];
  pdf:string;
  name:string;
  onChange({...args}: any) : any,
}


const CheckList = ({ image, title, description, checklist,pdf,name, onChange: callback }: Props) => {

  const [listOpened, setListOpened] = useState(false);
  return (
    <ItemBlockCheck>
      <DiagnCheckBlockstItem
        onClick={() => setListOpened((a) => !a)}
      >
        <ImgBlockItem src={image} />
        <DiagnCheckBlockstItemText>
          <DiagnTextBlackBold style={{ fontSize: "20px" }}>
            {title}
          </DiagnTextBlackBold>
          <DiagnTextBlack>{description}</DiagnTextBlack>
        </DiagnCheckBlockstItemText>
        <Caret $listOpened={listOpened}/>
      </DiagnCheckBlockstItem>
      {listOpened && (
        <BlocksChecks>
          {checklist.map((value, index) => (
            <BlockstItemChecks>
              {value.checked ? (
                <IconWrapper><CheckedImg onClick={()=> callback(index)}/></IconWrapper>
              ) : (
                <IconWrapper><UncheckedImg onClick={()=> callback(index)} /></IconWrapper>
              )}
              <DiagnTextBlack>{value.text}</DiagnTextBlack>          
            </BlockstItemChecks>
          ))}
         <Button href={pdf} download={name}>Скачать для печати<File_Download style={{marginLeft:"10px"}}/></Button>
        </BlocksChecks>
      )}
    </ItemBlockCheck>
  );
};

export default CheckList;
