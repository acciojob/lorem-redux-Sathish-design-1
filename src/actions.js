export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    // Using jsonplaceholder for testing to ensure the page isn't blank
    fetch('https://api.lorem.com/ipsum') 
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data.slice(0, 10) });
      })
      .catch((error) => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
      });
  };
};