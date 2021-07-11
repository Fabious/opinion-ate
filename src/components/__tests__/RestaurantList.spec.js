import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList';

describe('RestaurantList', () => {
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants;

  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      loading: false,
      restaurants,
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;

    return render(<RestaurantList {...props} />);
  };

  it('loads restaurants on first render', () => {
    renderWithProps();
    expect(loadRestaurants).toHaveBeenCalled();
  });

  describe('when loading succeeds', () => {
    it('displays the restaurants', () => {
      const {queryByText} = renderWithProps();
      expect(queryByText('Sushi Place')).not.toBeNull();
      expect(queryByText('Pizza Place')).not.toBeNull();
    });

    it('does not display the loading indicator while not loading', () => {
      const {queryByTestId} = renderWithProps();
      expect(queryByTestId('loading-indicator')).toBeNull();
    });
  });

  it('display the loading indicator while loading', () => {
    const {queryByTestId} = renderWithProps({loading: true});
    expect(queryByTestId('loading-indicator')).not.toBeNull();
  });
});
