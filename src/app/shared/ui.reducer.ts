import * as fromUI from './ui.acciones';

export interface State {
  isLoading: boolean;
}

const initState: State = {
  isLoading: false,
};

export function uiReducer(state = initState, action: fromUI.acciones): State {
  switch (action.type) {
    case fromUI.ACTIVR_LOADING:
      return {
        isLoading: true,
      };
    case fromUI.DESACTIVR_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
}
