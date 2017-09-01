import axios from 'axios';

export const getConsoleList = (id) => {
  return {
      type: 'ADD_REVIEW',
      payload: axios.post(`http://localhost:8000/reviews/${id.game.id}`, id)
  };
};
