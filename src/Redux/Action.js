export const All_Data = "All_Data";
export const single_Data = "Single_Data";

export const Data_Action = (all_Data) => {
  return {
    type: All_Data,
    payload: all_Data,
  };
};

export const Single_Action = (singleProduct) => {
  return {
    type: single_Data,
    payload: singleProduct,
  };
};
