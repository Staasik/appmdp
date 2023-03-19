import ButtonsComponent from "components/pages/Trackers/Buttons";
import ChoiseComponent from "components/pages/Trackers/ChoiseComponent";
import TextComponent from "components/pages/Trackers/TextArea";
interface IStepMock {
    stepName: string;
    component: JSX.Element;
}
  
export const StepMock: Array<IStepMock> = [
    {
      stepName: "1 шаг...",
      component: <TextComponent />,
    },
    {
      stepName: "2 шаг...",
      component: <ButtonsComponent />,
    },
    {
      stepName: "3 шаг...",
      component: <ChoiseComponent />,
    },
    {
      stepName: "4 шаг...",
      component: <TextComponent />,
    },
    {
      stepName: "5 шаг...",
      component: <TextComponent />,
    },
    {
      stepName: "6 шаг",
      component: <TextComponent />,
    },
];

export const ButtonsMock = ["Общение с коллегой","Общение с учеником","Общение с группой детей","Общение с родителями учеников","Общение с администрацией школы","Другое"];

export default StepMock;