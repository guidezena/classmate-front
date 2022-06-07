const initialState = {
  reload: true,
};

export const reloadComponentsReduce = (state = initialState, action: any) => {
  switch (action.type) {
    case "reload_component":
      return {
        ...state,
        reload: action.reload,
      };
    default:
      return state;
  }
};
