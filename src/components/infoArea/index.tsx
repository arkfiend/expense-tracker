import * as C from './styles';
import {formatCurrentMonth} from '../../helpers/dateFilter';
import {ResumeItem} from '../resumeItem';

type Props = {
  currentMonth : string;
  onMonthChange : (newMonth : string) => void;
  income: number;
  expense: number;
  total: number;
}

export const InfoArea = ( {currentMonth, onMonthChange, income, expense, total}: Props) => {
  //Muda para data, calcula o novo mes e chama funcao do App para mudar o useState de lá.
  const HandlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month)-1, 1); //1, porque preciso escolher um dia.
    currentDate.setMonth(currentDate.getMonth() -1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
  }

  const HandleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month)-1, 1); //1, porque preciso escolher um dia.
    currentDate.setMonth(currentDate.getMonth() +1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
  }

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick = {HandlePrevMonth}>⬅</C.MonthArrow>
        <C.MonthTitle>
          {formatCurrentMonth(currentMonth)}
        </C.MonthTitle>
        <C.MonthArrow onClick= {HandleNextMonth}>➡</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title='Receitas' value={income}/>
        <ResumeItem title='Despesas' value={expense}/>
        <ResumeItem title='Balanço'  value={total} color={total < 0 ? 'red' : 'blue'}/>
      </C.ResumeArea>
    </C.Container>
  );
}