import * as React from 'react';

export const RestaurantList = ({loadRestaurants}) => {
  React.useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return <div>RestaurantList</div>;
};

export default RestaurantList;
