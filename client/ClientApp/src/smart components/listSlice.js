import { createSlice, current } from "@reduxjs/toolkit";

/**
 * the data structure of the store is:
 * state:{
 * catagories:[{name:string, items:[{name: string, count: number}]}]}
 */
export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    // expects {categoryName: string, itemName:string}
    addItemToCategory: (state, action) => {
      const { categoryName, itemName } = action.payload;

      const catIndex = current(state.value).findIndex((category) => {
        return category.name === categoryName;
      });
      if (catIndex === -1) {
        const newItem = { name: itemName, count: 1 };
        let newCat = { items: [{ newItem }] };
        newItem.name = action.payload;
        state.value = [...state.value, newCat];
      } else {
        const itemIndex = current(state.value[catIndex].items).findIndex(
          (item) => {
            return item.name === itemName;
          }
        );
        if (itemIndex === -1) {
          state.value[catIndex].items = [
            ...state.value[catIndex].items,
            { name: itemName, count: 1 },
          ];
        } else {
          state.value[catIndex].items[itemIndex].count += 1;
        }
      }
    },
    // expects string
    addCategory: (state, action) => {
      const doesExist = current(state.value).find((category) => {
        return category.name === action.payload;
      });

      if (!doesExist) {
        let newItem = { items: [] };
        newItem.name = action.payload;
        state.value = [...state.value, newItem];
      }
    },
  },
});

export const { addItemToCategory, addCategory } = listSlice.actions;

export const selectList = (state) => state.list.value;
export const selectListCount = (state) => {
  return state.list.value.reduce(
    (sum, cat) =>
      sum + cat.items.reduce((itemsum, item) => itemsum + item.count, 0),
    0
  );
};

export default listSlice.reducer;
