import styles from './ShoppingList.module.css';
import { useListItem, useDispatch } from '../context/ListItemContext';

const ShoppingListItem = ({ item }) => {
  const dispatch = useDispatch();

  return <div className={`${styles.listItem} ${item.done ? styles.listItemDone : styles.listItemNew}`}>
    <div className={styles.labelContainer}>
      <span className={styles.tickButton} onClick={() => {
        dispatch({
          type: 'markComplete',
          id: item.id,
        })
      }}>&#10003;</span>
      <span className={styles.label}>{item.name}</span>
    </div>
    <span className={styles.cancelButton}
      onClick={() => {
      dispatch({
        type: 'deleteItem',
        id: item.id,
      })
    }}>&#10007;</span>
  </div>
}

const ShoppingList = ({ onMarkComplete, onDelete }) => {
  const items = useListItem();
  if (!items.length) { return <></> }
  return <div className={styles.shoppingListContainer}>
    {items.map((item) => {
      return <div key={item.id}>
        <ShoppingListItem item={item} onMarkComplete={onMarkComplete} onDelete={onDelete} />
      </div>
    })}
  </div>
}

export default ShoppingList;
