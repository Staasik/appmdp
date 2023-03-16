import { useState } from "react";
import {
    TrackButton
} from "styles/pages/Trackers/Trackers";

interface Props {
    data: {value:string},
}

const ChangeButton = ({data}: Props) => {
  const [isClick, setisClick] = useState<boolean>(false);

  const Click = () => {
    setisClick(true);
  };

  return <TrackButton onClick={() => Click()} $isClick={isClick}>{data.value}</TrackButton>;
};

export default ChangeButton;
