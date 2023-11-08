import SearchBox from './SearchBox';
import ShoppingList from './ShoppingList';
import styles from './ShoppingListApp.module.css';
import { useReducer } from 'react';

const INITIAL_LIST = [];

const shoppingListReducer = (listItems, action) => {
  switch(action.type) {
    case 'addItem':
      return [
        ...listItems,
        {
         id: new Date().getTime(),
          name: action.itemName,
          done: false,
        }
      ]
    case 'markComplete':
      return listItems.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            done: !item.done,
          }
        }
        return item;
      })
    case 'deleteItem':
      return listItems.filter((listItem) => {
        return listItem.id !== action.id;
      })
    default:
      throw new Error('Invalid action');
  }
}

const ShoppingListApp = () => {
  const [shoppingListItems, dispatch] = useReducer(shoppingListReducer, INITIAL_LIST);

  return <div className={styles.searchBoxContainer}>
    <h1 className={styles.header}>My Shopping List</h1>
    <SearchBox className={styles.searchField} onSelectItem={(itemName) => {
      dispatch({
        type: 'addItem',
        itemName,
      })
    }}/>
    <ShoppingList
      items={shoppingListItems}
      onMarkComplete={(itemId) => {
        dispatch({
          type: 'markComplete',
          id: itemId,
        })
      }}
      onDelete={(itemId) => {
        dispatch({
          type: 'deleteItem',
          id: itemId,
        })
      }}
    />
  </div>
}

export default ShoppingListApp;
