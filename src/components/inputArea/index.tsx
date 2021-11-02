import * as C from './styles';
import {Item} from '../../types/Item';
import React, { useState } from 'react';
import { categories } from '../../data/categories';

type Props = {
  onAdd : (item: Item) => void;
}



export const InputArea = ({onAdd}: Props) => {

  const clearFields = () => {
    setDateField('');
    setTitleField('');
    setValueField(0);
    setCategoryField('');
  }

  const handleAddEvent = () => {

    let errors: string[] = [];
    //Data
    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    //Categoria
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    //Titulo
    if (titleField == ''){
      errors.push('Titulo inválido');
    }
    //valor
    if (valueField < 0){
      errors.push('Valor abaixo de zero não é permitido');
    }

    //Checar se existem erros:
    if (errors.length > 0){
      alert(errors.join("\n"));
    }else{
      onAdd({
        date: new Date(dateField),
        title: titleField,
        category: categoryField,
        value: valueField
      });
    }

    //Limpar os campos escritos
    clearFields();

  }
  
  //Os 3 useStateQue armazenam as variaveis
  const [dateField, setDateField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [valueField, setValueField] = useState(0);

  //Array que contém strings das "tags" que existem antes dos ":".
  //Ex:  food: { tit...
  //retorna: "food"
  let categoryKeys: string[] = Object.keys(categories);



  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle> Data </C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)}/>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle> Categoria </C.InputTitle>
        <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle> Título </C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)}/>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle> Valor </C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputLabel>

      <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>

    </C.Container>
  );  
}