import {
  CREATE_ITEM,
  RETRIEVE_ITEMS,
  UPDATE_ITEM,
  DELETE_ITEM,
  RETRIEVE_ITEM,
} from "./type";

import DataService from "../services/index";

export const createItem = (name, description) => async (dispatch) => {
  try {
    const res = await DataService.createNewItem({ name, description });

    dispatch({
      type: CREATE_ITEM,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveItems = () => async (dispatch) => {
  try {
    const res = await DataService.getAll();

    dispatch({
      type: RETRIEVE_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateItem = (_id, data) => async (dispatch) => {
  try {
    const res = await DataService.updateItemById(_id, data);

    dispatch({
      type: UPDATE_ITEM,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteItem = (_id) => async (dispatch) => {
  try {
    await DataService.deleteItemById(_id);

    dispatch({
      type: DELETE_ITEM,
      payload: { _id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findItemById = (_id) => async (dispatch) => {
    try {
      const res = await DataService.getItemById(_id)
  
      dispatch({
        type: RETRIEVE_ITEM,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

