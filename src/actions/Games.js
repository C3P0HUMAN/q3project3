import axios from 'axios';

export const getGameList = (payload) => {
  console.log('games: ', payload)
  return {
    type: 'FETCH_GAMES',
    payload: axios.get('http://localhost:8000/games')
  };
};
