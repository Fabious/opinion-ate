import * as React from 'react';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  React.useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

export default RestaurantList;
