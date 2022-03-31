import {
  BlocksChecks,
  BlockstItemChecks,
  DiagnCheckBlockstItem,
  DiagnCheckBlockstItemText,
  DiagnTextBlack,
  DiagnTextBlackBold,
  ImgBlockItem,
  ItemBlockCheck,
} from "styles/pages/UserProfile/UserProfile";
import { ICheck } from "mockdata/UserProfileCheck";
import UncheckedIcon from "images/UserProfile/CheckNull.png";
import CheckedIcon from "images/UserProfile/CheckYes.png";
import { useState } from "react";
import {Caret,Button} from 'styles/pages/UserProfile/CheckList'
import { ReactComponent as File_Download } from "images/UserProfile/File_Download.svg";
interface Props {
  index: number;
  image: string;
  title: string;
  description: string;
  checklist: ICheck[];
}
const CheckList = ({ index, image, title, description, checklist }: Props) => {
  const [listOpened, setListOpened] = useState(false);
  return (
    <ItemBlockCheck>
      <DiagnCheckBlockstItem
        key={index}
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
                <ImgBlockItem src={CheckedIcon} />
              ) : (
                <ImgBlockItem src={UncheckedIcon} />
              )}
              <DiagnTextBlack>{value.text}</DiagnTextBlack>          
            </BlockstItemChecks>
          ))}
          <Button>Скачать для печати<File_Download style={{marginLeft:"20px"}}/></Button>
        </BlocksChecks>
      )}
    </ItemBlockCheck>
  );
};

export default CheckList;
