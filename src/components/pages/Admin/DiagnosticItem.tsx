import {
  ButtonPublish,
  DiagnBlockstItem,
  DiagnTextItem,
  ImgBlockItem,
  SvgBlock,
} from "styles/pages/Admin/DiagnosticItem";
import { ReactComponent as Pencil } from "images/Admin/Edit_Pencil.svg";
import { ReactComponent as Trash } from "images/Admin/Trash_Full.svg";
import { IDiagnItem } from "codebase/store/adminStore";
import { useContext } from "react";
import { AdminContext } from "./Editor";
import { observer } from "mobx-react-lite";

interface Props {
  data: IDiagnItem;
}

const DiagnosticItem = ({ data }: Props) => {
  const { adminStore } = useContext(AdminContext);

  return (
    <DiagnBlockstItem>
      <ImgBlockItem src={require("images/Admin/NewDiagn.png")} />
      <DiagnTextItem>{data.title}</DiagnTextItem>
      <ButtonPublish>Опубликовать</ButtonPublish>
      <SvgBlock>
        <a href={`diagnosticEditor/${data.id}`}><Pencil /></a>
        <Trash onClick={() => {adminStore.deleteDiagnostic(data.id);}}/>
      </SvgBlock>
    </DiagnBlockstItem>
  );
};

export default observer(DiagnosticItem);
