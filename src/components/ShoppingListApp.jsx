import { ListItemProvider } from '../context/ListItemContext';
import SearchBox from './SearchBox';
import ShoppingList from './ShoppingList';
import styles from './ShoppingListApp.module.css';

const ShoppingListApp = () => {
  return <ListItemProvider>
     <div className={styles.searchBoxContainer}>
      <h1 className={styles.header}>My Shopping List</h1>
      <SearchBox className={styles.searchField} />
      <ShoppingList />
    </div>
  </ListItemProvider>
}

export default ShoppingListApp;
