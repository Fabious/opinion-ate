export const STORE_RESTAURANT = 'STORE_RESTAURANT';
export const START_LOADING = 'START_LOADING';

const storeRestaurants = records => ({
  type: STORE_RESTAURANT,
  records,
});

const startLoading = () => ({type: START_LOADING});

export const loadRestaurants = () => (dispatch, getState, api) => {
  dispatch(startLoading());
  api.loadRestaurants().then(records => {
    dispatch(storeRestaurants(records));
  });
};
