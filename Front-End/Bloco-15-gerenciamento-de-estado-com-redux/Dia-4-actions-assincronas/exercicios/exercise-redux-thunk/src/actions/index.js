export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const ERROR = 'ERROR';

export const requestAPI = () => ({ type: REQUEST_API });
export const getError = (e) => ({ type: ERROR, error: e});

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
    return  async(dispatch) =>{
        dispatch(requestAPI());
      try {
        const response = await fetch('https://aws.random.cat/meow');  
        const data = await response.json();
        dispatch(getPicture(data.file));
      } catch (error) {
        dispatch(getError(error));
      }
    }
}
