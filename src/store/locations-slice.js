import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    notification: null,
    isLoading: true,
  },
  reducers: {
    replaceLocations(state, action) {
      state.locations = action.payload.locations;
      state.isLoading = false;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const fetchLocationsData = () => {
  return async (dispatch) => {
    const fetchLocations = async () => {
      const response = await fetch(
        'https://6033c4d8843b15001793194e.mockapi.io/api/locations'
      );

      if (!response.ok) {
        throw new Error('Could not fetch locations data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const locationsData = await fetchLocations();
      dispatch(
        locationActions.replaceLocations({
          locations: locationsData,
        })
      );
    } catch (error) {
      dispatch(
        locationActions.showNotification({
          title: 'Error!',
          message: 'Fetching data failed',
        })
      );
    }
  };
};

export const locationActions = locationSlice.actions;

export default locationSlice;
