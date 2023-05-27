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

  if (data.published) {
    return (<DiagnBlockstItem>
      <ImgBlockItem
        src={require("images/Admin/шаблон.jpg")}
      />
      <DiagnTextItem>{data.title}</DiagnTextItem>
      <ButtonPublish onClick={() => { adminStore.publishDiagnostic(false, data.id) }}>Вернуть в черновики</ButtonPublish>
    </DiagnBlockstItem>
    )
  }

  return (
    <DiagnBlockstItem>
      <ImgBlockItem src={require("images/Admin/шаблон.jpg")} />
      <DiagnTextItem>{data.title}</DiagnTextItem>
      <ButtonPublish onClick={() => { adminStore.publishDiagnostic(true, data.id) }}>Опубликовать</ButtonPublish>
      <SvgBlock>
        <a href={`diagnosticEditor/${data.id}`}><Pencil style={{ cursor: "pointer" }} /></a>
        <Trash style={{ cursor: "pointer" }} onClick={() => { adminStore.deleteDiagnostic(data.id); }} />
      </SvgBlock>
    </DiagnBlockstItem>

  );
};

export default observer(DiagnosticItem);
