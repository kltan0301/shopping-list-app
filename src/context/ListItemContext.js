import { createContext, useContext, useReducer } from "react";

export const ListItemContext = createContext(null);
export const ListItemDispatchContext = createContext(null);

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

export const ListItemProvider = ({ children }) => {
  const [shoppingListItems, dispatch] = useReducer(shoppingListReducer, INITIAL_LIST);

  return <ListItemContext.Provider value={shoppingListItems}>
    <ListItemDispatchContext.Provider value={dispatch}>
      {children}
    </ListItemDispatchContext.Provider>
  </ListItemContext.Provider>
}

export const useDispatch = () => {
  return useContext(ListItemDispatchContext);
}

export const useListItem = () => {
   return useContext(ListItemContext);
}
