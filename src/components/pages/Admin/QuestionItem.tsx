import {
    QuestionBlock,
    QuestionText,
    QuestionTextBlock,
    TextComponents
} from "styles/pages/Admin/QuestionItem";
import colors from "utils/colors";
import { ReactComponent as Trash } from 'images/Admin/TrashQuestion.svg';
import { IQuestion } from "codebase/store/adminStore";
import { useContext } from "react";
import { AdminContext } from "./Editor";
import { observer } from "mobx-react-lite";

interface Props{
    question: IQuestion,
    index: number
}

const QuestionItem = ({ question, index } : Props) => {

    const { adminStore } = useContext(AdminContext)

    return (
        <QuestionBlock style={{ background: colors.ALICE_BLUE2 }}>
            <QuestionTextBlock>
                <QuestionText>Вопрос {index + 1}</QuestionText>
                <Trash style={{ cursor: "pointer" }} onClick={() =>  adminStore.deleteQuestion(question.tempid)}/>
            </QuestionTextBlock>
            <TextComponents
                maxLength={200}
                placeholder="Введите заголовок для вопроса теста..."
                value={question.text}
                onChange={(e) => { adminStore.changeQuestionText(question.tempid, e.target.value)}}
            />
        </QuestionBlock>
    )
}

export default observer(QuestionItem)