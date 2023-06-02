import { INCREMENT } from "../Constant/Constant";

const initialState = { count: 0 };
export const IncrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    default:
      return state;
  }
};
