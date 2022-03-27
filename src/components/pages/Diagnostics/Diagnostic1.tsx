import Quest from 'components/defaultComponents/Quest';
import { data } from 'mockdata/mocktest1';
import { Button, DiagBody, DiagnBlock } from 'styles/pages/Diagnostics/Diagnostic';
import DiagnHeader from './DiagnHeader';

const mockdata = {
    title: 'Профессиональное выгорание',
    regulations: 'Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе.',
    condition: 'Варианты ответов: от 0 – никогда до 6 – ежедневно'
}

const Diagnostic1 = () => {
  return (
        <DiagBody>
            <DiagnHeader title={mockdata.title} regulations={mockdata.regulations} condition={mockdata.condition}/>
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
