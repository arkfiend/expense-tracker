//todas as funç~eos de manipulação de datas ficam aqui.
import {Item} from '../types/Item';

export const getCurrentMonth = () =>{
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`;
}



//recebe dois argumentos
//retorna uma lista de itens, indicado por:   : Item[]
export const filterListByMonth = (list : Item[], date :string): Item[] =>{
  let newList: Item[] = [];
  let [year, month] = date.split('-'); //da split na variavel date. [0] vai para year e [1] para month
  //o "i" e um int dentro desse FOR
  for (let i in list){
    if (
      list[i].date.getFullYear() === parseInt(year) && 
      list[i].date.getMonth()+1 === parseInt(month)
    ){
      newList.push(list[i]);
    }
  }
  return newList;
}


export const formateDate = (date: Date): string => {
  let year = date.getUTCFullYear();
  let month = addZeroToDate( date.getMonth()+1);
  let day = addZeroToDate( date.getDate());

  return `${day}/${month}/${year}`;
}


const addZeroToDate = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
}

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month)-1]} de ${year}`; 
}




