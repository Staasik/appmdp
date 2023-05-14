import { Context } from "index";
import { observer } from "mobx-react-lite";
import { useState, useContext, useEffect } from "react";
import {
  DiagHtml,
  TextBlock,
} from "styles/pages/Admin/ActiveDiagnostics";
import CheckList from 'components/pages/UserProfile/CheckList';

const OneDiagnostic = () => {
  return (
    <DiagHtml>

    </DiagHtml>
  );
};

export default observer(OneDiagnostic);
