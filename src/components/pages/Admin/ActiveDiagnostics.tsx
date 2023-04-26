import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import {
  DiagHtml,
  TextBlock,
  AdminText,
  DiagnText,
  DiagnBlocks,
  DiagnBlockstItem,
  ImgBlockItem,
  DiagnTextItem,ButtonPublish,ButtonAdd,
} from "styles/pages/Admin/ActiveDiagnostics";
import diagnMock from "mockdata/diagnBlocksMock";
import { ReactComponent as Pencil } from 'images/Admin/Edit_Pencil.svg';
import { ReactComponent as Trash } from 'images/Admin/Trash_Full.svg';


const ActiveDiagnostics = () => {

  return (
    <DiagHtml>
      <TextBlock>
        <AdminText>Администратор</AdminText>
      </TextBlock>
      <TextBlock>
        <DiagnText>Активные диагностики:</DiagnText>
      </TextBlock>
      <DiagnBlocks>
        {diagnMock.map((value, index) => (
          <DiagnBlockstItem>
            <ImgBlockItem src={value.image} />
            <DiagnTextItem>{value.name}</DiagnTextItem>
          </DiagnBlockstItem>
        ))}
      </DiagnBlocks>
      <TextBlock>
        <DiagnText>Черновики:</DiagnText>
      </TextBlock>
      <DiagnBlocks>
        <DiagnBlockstItem>
          <ImgBlockItem
            src={require("images/Admin/NewDiagn.png")}
          ></ImgBlockItem>
          <DiagnTextItem>Название диагностики</DiagnTextItem>
          <ButtonPublish>Опубликовать</ButtonPublish>
          <Pencil/>
          <Trash/>
        </DiagnBlockstItem>
      </DiagnBlocks>
      <ButtonAdd href="adminnewagnostics">Добавить</ButtonAdd>
    </DiagHtml>
  );
};

export default ActiveDiagnostics;
