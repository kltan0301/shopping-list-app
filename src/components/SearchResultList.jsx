import styles from './SearchResultList.module.css';
import { useDispatch } from '../context/ListItemContext';

const SearchResultList = ({ list }) => {
  const dispatch = useDispatch();

  if (!list.length) { return <></> }
  return <div className={styles.resultList}>
    {list.map(item => {
      return <div key={item} className={styles.resultItem} onClick={() => {
        dispatch({
          type: 'addItem',
          itemName: item,
        })
      }}>{item}</div>
    })}
  </div>
}

export default SearchResultList;
