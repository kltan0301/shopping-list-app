import { useContext } from 'react';
import styles from './SearchResultList.module.css';
import { ListItemDispatchContext } from '../context/ListItemContext';

const SearchResultList = ({ list }) => {
  const dispatch = useContext(ListItemDispatchContext);

  if (!list.length) { return <></> }
  return <div className={styles.resultList}>
    {list.map(item => {
      return <div key={item} onClick={() => {
        dispatch({
          type: 'addItem',
          itemName: item,
        })
      }}>{item}</div>
    })}
  </div>
}

export default SearchResultList;
