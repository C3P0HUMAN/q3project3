import axios from 'axios';

export const getConsoleList = (text) => {
  return {
      type: 'FETCH_CONSOLES',
      payload: axios.get(`http://localhost:8000/consoles`)
  };
};

export const removeFromList = (text) => {
  console.log(text);
  return {
      type: 'remove',
      payload: text
  };
};

export const getList = () => {
  return {
      type: 'FETCH',
      payload: axios.get('http://localhost:8000/todos')
  };
};
