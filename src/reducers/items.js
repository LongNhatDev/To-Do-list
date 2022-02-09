import {
  CREATE_ITEM,
  RETRIEVE_ITEMS,
  UPDATE_ITEM,
  DELETE_ITEM,
} from "../components/actions/type";

const initialState = [];

function itemReducer(items = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ITEM:
      return [...items, payload];
    case RETRIEVE_ITEMS:
      return payload;
    case UPDATE_ITEM:
      return items.map((item) => {
        if (item._id === payload._id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return item;
        }
      });
    case DELETE_ITEM:
      return items.filter(({ _id }) => _id !== payload._id);
    default:
      return items;
  }
}

export default itemReducer;