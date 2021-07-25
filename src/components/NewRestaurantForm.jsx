import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {createRestaurant} from '../store/restaurants/actions';
import {Alert} from '@material-ui/lab';

export const NewRestaurantForm = ({createRestaurant}) => {
  const [name, setName] = React.useState('');
  const [validationError, setValidationError] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (name) {
      setValidationError(false);
      setServerError(false);
      createRestaurant(name).then(
        () => setName(''),
        () => {
          setServerError(true);
        },
      );
    } else {
      setValidationError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Name is required</Alert>}
      <TextField
        placeholder="Add Restaurant"
        onChange={e => setName(e.target.value)}
        value={name}
        fullWidth
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-restaurant-submit-button"
      >
        Add
      </Button>
    </form>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = {createRestaurant};

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);
