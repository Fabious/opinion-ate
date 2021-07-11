export const STORE_RESTAURANT = 'STORE_RESTAURANT';

const storeRestaurants = records => ({
  type: STORE_RESTAURANT,
  records,
});

export const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then(records => {
    dispatch(storeRestaurants(records));
  });
};
