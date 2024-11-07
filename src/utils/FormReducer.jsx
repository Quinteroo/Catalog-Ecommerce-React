import React, { useReducer, useCallback } from 'react';


const INITIAL_FORM_STATE = {
  nombre: '',
  email: '',
  mensaje: ''
};


function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
}
