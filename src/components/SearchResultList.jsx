import styles from './SearchResultList.module.css';

const SearchResultList = ({ list, onSelectItem }) => {
  if (!list.length) { return <></> }
  return <div className={styles.resultList}>
    {list.map(item => {
      return <div key={item} onClick={() => {
        onSelectItem(item);
      }}>{item}</div>
    })}
  </div>
}

export default SearchResultList;
