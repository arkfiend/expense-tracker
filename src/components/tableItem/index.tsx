import * as C from './styles';
import {Item} from '../../types/Item';
import {formateDate} from '../../helpers/dateFilter';
import {categories} from '../../data/categories';

type Props = {
  item : Item
}

export const TableItem = ({item} : Props) => {
  return (
    <C.TableLine backGroundcolor={categories[item.category].color}>
      <C.TableColumn>{formateDate(item.date)}</C.TableColumn>
      <C.TableColumn>{categories[item.category].title}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>

      <C.TableColumn>
        <C.Valueformater>
          <C.TableKind>
            {categories[item.category].expense ? '-' : `+`}
          </C.TableKind>
          <C.TableValue kind={categories[item.category].expense}>
            R${item.value.toFixed(2)}
          </C.TableValue>          
        </C.Valueformater>

      </C.TableColumn>

    </C.TableLine>
  );
}