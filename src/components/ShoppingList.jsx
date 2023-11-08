import styles from './ShoppingList.module.css';

const ShoppingListItem = ({ item, onMarkComplete, onDelete }) => {
  return <div className={`styles.listItem ${item.done ? styles.listItemDone : styles.listItemNew}`}>
    <span onClick={() => {
      onMarkComplete(item.id);
    }}>&#10003;</span>
    <span className={styles.label}>{item.name}</span>
    <span onClick={() => {
      onDelete(item.id);
    }}>&#10007;</span>
  </div>
}

const ShoppingList = ({ items, onMarkComplete, onDelete }) => {
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
