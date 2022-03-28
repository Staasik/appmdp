import Quest from 'components/defaultComponents/Quest';
import { data } from 'mockdata/mocktest1';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';
import { IUserData } from 'App'
import imagefoot from "images/diagn1.png"; 
import image600 from "images/diagn1_600.png"; 

const mockdata = {
    title: 'Профессиональное выгорание',
    regulations: 'Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно',
    images: [imagefoot,image600]
}

interface Props{
    userData: IUserData | null
}

const Diagnostic1 = ({ userData }: Props) => {
  return (
        <DiagBody>
            <DiagnHeader {...mockdata}/>
            <DiagnBlock>
                    {data.map((value,index)=>{ 
                        return(
                            <Quest text={value.text} options={value.options} index={index}/>
                        )
                    })}
            </DiagnBlock>
            <Button>Завершить</Button>
        </DiagBody>
  );
}

export default Diagnostic1;
