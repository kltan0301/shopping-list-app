import styles from './SearchBox.module.css';
import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import SearchResultList from './SearchResultList';

const SearchBox = ({ onSelectItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useDebounce(async () => {
    if (searchTerm.length >= 2) {
      const result = await fetch(
        `https://api.frontendeval.com/fake/food/${searchTerm}`
      )
      const data = await result.json();
      setSearchResults(data);
    }
  }, [searchTerm], 500);

  return <>
    <input
      className={styles.searchField}
      name="searchItem"
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
    <SearchResultList list={searchResults} onSelectItem={onSelectItem}/>
  </>
}

export default SearchBox;
