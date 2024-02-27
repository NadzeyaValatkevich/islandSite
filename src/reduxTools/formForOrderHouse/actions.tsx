export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";

export interface FormAction {
  type: "OPEN_FORM" | "CLOSE_FORM";
}

export const openFormStateAction = (): FormAction => {
  return {
    type: OPEN_FORM,
  };
};

export const closeFormStateAction = (): FormAction => {
  return {
    type: CLOSE_FORM,
  };
};
