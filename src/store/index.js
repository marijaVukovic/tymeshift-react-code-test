import { configureStore } from '@reduxjs/toolkit';

import locationActions from './locations-slice';

const store = configureStore({
  reducer: { locations: locationActions.reducer },
});

export default store;
