import Buttons from "components/pages/Trackers/Buttons";
import Choises from "components/pages/Trackers/Choises";
import TextArea from "components/pages/Trackers/TextArea";
interface IStepMock {
    stepName: string;
    component: JSX.Element;
}

export const PlaceholderText = [
  "Сегодня произошла ситуация, когда...",
  "Я сделал несколько полезых вещей:",
  "Завтра я выполню то, что сделает мою семью более счастливой"]

export const TextDescription = [
  "Выберите ситуацию общения, в которой вы сегодня в течение дня приняли участие, и она вызвала у вас сильные эмоции",
  "Кратко опишите данное событие",
  "Выберете одну или несколько эмоций, которые вы испытывали в данной ситуации и оцените их интенсивность по шкале от 0 до 10",
  "Определите актуальное эмоциональное состояние, которые вы испытываете прямо сейчас и оцените их интенсивность по шкале от 0 до 10",
  "Что я сделал, чтобы отдохнуть и позаботиться о себе:",
  "Что я выполню завтра, чтобы улучшить своё настроение и состояние:"]
    
export const StepMock: Array<IStepMock> = [
    {
      stepName: "1 шаг...",
      component: <Buttons index={0} decription={TextDescription[0]}/>,
    },
    {
      stepName: "2 шаг...",
      component: <TextArea index={1} placetext={PlaceholderText[0]} decription={TextDescription[1]}/>,
    },
    {
      stepName: "3 шаг...",
      component: <Choises index={2} decription={TextDescription[2]}/>,
    },
    {
      stepName: "4 шаг...",
      component: <Choises index={3} decription={TextDescription[3]}/>,
    },
    {
      stepName: "5 шаг...",
      component: <TextArea index={4} placetext = {PlaceholderText[1]} decription={TextDescription[4]}/>,
    },
    {
      stepName: "6 шаг",
      component: <TextArea index={5} placetext = {PlaceholderText[2]} decription={TextDescription[5]}/>,
    },
];

export const ButtonsMock = ["Общение с коллегой","Общение с учеником","Общение с группой детей","Общение с родителями учеников","Общение с администрацией школы","Другое"];


export default StepMock;