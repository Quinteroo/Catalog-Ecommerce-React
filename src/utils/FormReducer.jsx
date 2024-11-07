

export const INITIAL_FORM_STATE = {
  nombre: '',
  email: '',
  mensaje: ''
};


export function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
}

