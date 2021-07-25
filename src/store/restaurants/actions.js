export const STORE_RESTAURANT = 'STORE_RESTAURANT';
export const START_LOADING = 'START_LOADING';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';
export const ADD_RESTAURANT = 'ADD_RESTAURANT';

const storeRestaurants = records => ({
  type: STORE_RESTAURANT,
  records,
});

const startLoading = () => ({type: START_LOADING});

const recordErrorLoading = () => ({type: RECORD_LOADING_ERROR});

export const loadRestaurants = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api.loadRestaurants().then(
    records => {
      dispatch(storeRestaurants(records));
    },
    () => {
      dispatch(recordErrorLoading());
    },
  );
};

const addRestaurant = record => ({type: ADD_RESTAURANT, record});

export const createRestaurant = name => (dispatch, getState, api) => {
  return api.createRestaurant(name).then(record => {
    dispatch(addRestaurant(record));
  });
};
