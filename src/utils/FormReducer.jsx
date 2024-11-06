import React, { useReducer, useCallback } from 'react';

// Estado inicial
const INITIAL_FORM_STATE = {
  nombre: '',
  email: '',
  mensaje: ''
};

// Reducer para actualizar el estado
function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}





