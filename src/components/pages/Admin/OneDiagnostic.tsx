
import {
  ButtonPublish,
  DiagnBlockstItem,
  DiagnTextItem,
  ImgBlockItem
} from "styles/pages/Admin/OneDiagnostic";
import { ReactComponent as Pencil } from 'images/Admin/Edit_Pencil.svg';
import { ReactComponent as Trash } from 'images/Admin/Trash_Full.svg';
import { IDiagnItem } from "codebase/store/adminStore";
import { useContext } from "react";
import { AdminContext } from "./Editor";
import { observer } from "mobx-react-lite";

const OneDiagnostic = () => {

  const { adminStore } = useContext(AdminContext)

  return (
      <DiagnBlockstItem>
          <ImgBlockItem
              src={require("images/Admin/NewDiagn.png")}
          />
          <DiagnTextItem>Название диагностики</DiagnTextItem>
          <ButtonPublish>Вернуть в черновики</ButtonPublish>
      </DiagnBlockstItem>
  )
}

export default observer(OneDiagnostic)