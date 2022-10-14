import { All_Data, single_Data } from "./Action";

const initialState = {
  data: [],
  single_Product_Data: [],
};

export const All_reducer = (state = initialState, action) => {
  switch (action.type) {
    case All_Data:
      return {
        data: (state.data = action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export const single_reducer = (state = initialState, action) => {
  switch (action.type) {
    case single_Data:
      return {
        single_Product_Data: (state.single_Product_Data = action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
