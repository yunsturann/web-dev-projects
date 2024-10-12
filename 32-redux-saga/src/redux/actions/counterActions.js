import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from "../actionTypes";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const asyncIncrement = () => ({
  type: ASYNC_INCREMENT,
});
