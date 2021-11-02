import * as C from './App-Styles';
import {Item} from './types/Item';
import {Category} from './types/category';
import { items } from './data/items';
import {categories} from './data/categories';
import {TableArea} from './components/tableArea';
import {InfoArea} from './components/infoArea';
import {InputArea} from './components/inputArea';
//importar statert

//useState = Variavel ou array que é modificado durante visualização da página
//useEffect = ouve um ou mais useStates e executa sua função principal quando um desses useStates forem modificados.

import {useState, useEffect} from 'react';
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';

 

//https://www.youtube.com/watch?v=_hytKpMc04E&t=674s
const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  
  //Quando ouver mudança no list ou current month, o use efect é chamado para atualizar a "filteredByMonth"
  useEffect(()=>{
    setFilterList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  //Quando a filtered list se modificar, eu calculo a despesa e receita
  useEffect(()=>{
    var income = 0;
    var expense = 0;

    for (let i in filterList){
      if (categories[filterList[i].category].expense){
        expense += filterList[i].value;
      }else{
        income += filterList[i].value;
      }
    }

    //chamo o useState para modificar o valor das variaveis
    setIncome( +income.toFixed(2) );
    setExpense( +expense.toFixed(2) );
    setTotal( +(income - expense).toFixed(2) );

  }, [filterList]);

  const handleMonthChange = (newMonth : string) => {
    setCurrentMonth(newMonth);
  }

  //funcao para adicionar item na lista
  const handleAddItem = (item : Item) => {
    let newList = [...list]; //copia o array existente
    newList.push(item);
    //Atualizar a lista
    setList(newList);
  }

  return (
    <C.Container> 
      <C.Header>
        <C.HeaderText>
          Sistema Financeiro
        </C.HeaderText>      
      </C.Header>
      <C.Body>

        {/* Area de infromacoes */}
        <InfoArea 
          currentMonth ={currentMonth}
          onMonthChange = {handleMonthChange}
          income = {income}
          expense = {expense}
          total = {total}
        />

        {/* Area de inout */}
        <InputArea 
          onAdd={handleAddItem}
        />

        {/* Area da tabela */}
        <TableArea list={filterList}/>




      </C.Body>
      
    </C.Container>
    
  );
}


export default App;