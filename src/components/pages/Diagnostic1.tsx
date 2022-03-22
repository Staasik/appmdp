import Quest from 'components/pages/Quest';
import { data } from 'mockdata/mocktest1';
import { Button, DiagBody, DiagnBlock, DiagnBlockImg, DiagnBlockText, DiagnTextBlack, DiagnTextBlackBold, DiagnTextProf } from 'styles/pages/Diagnostic1';

const Diagnostic1 = () => {
  return (
        <DiagBody>
            <DiagnBlockImg>
                    <DiagnBlockText>
                        <DiagnTextProf>Профессиональное выгорание</DiagnTextProf>
                        <DiagnTextBlack>Вам предлагается 22 утверждения о чувствах и переживаниях, связанных с работой. Пожалуйста, прочитайте внимательно каждое утверждение и решите, чувствуете ли вы себя таким образом на вашей работе.</DiagnTextBlack>
                        <DiagnTextBlackBold>Варианты ответов: от 0 – никогда до 6 – ежедневно</DiagnTextBlackBold>
                    </DiagnBlockText>
            </DiagnBlockImg>
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
