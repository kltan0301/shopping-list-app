import SearchBox from './SearchBox';
import ShoppingList from './ShoppingList';
import styles from './ShoppingListApp.module.css';
import { useState } from 'react';

const ShoppingListApp = () => {
  const [shoppingListItems, setShoppingListItems] = useState([]);

  return <div className={styles.searchBoxContainer}>
    <h1 className={styles.header}>My Shopping List</h1>
    <SearchBox className={styles.searchField} onSelectItem={(itemName) => {
      setShoppingListItems([
        ...shoppingListItems,
        {
          id: new Date().getTime(),
          name: itemName,
          done: false,
        }
      ])
    }}/>
    <ShoppingList
      items={shoppingListItems}
      onMarkComplete={(itemId) => {
        const updatedShoppingListItems = shoppingListItems.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              done: !item.done,
            }
          }
          return item;
        })
        setShoppingListItems(updatedShoppingListItems);
      }}
      onDelete={(itemId) => {
        const updatedShoppingListItems = shoppingListItems.filter((listItem) => {
          return listItem.id !== itemId;
        })
        setShoppingListItems(updatedShoppingListItems)
      }}
    />
  </div>
}

export default ShoppingListApp;
