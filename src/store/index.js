import { configureStore as toolkitConfigureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/reducers'

const store = toolkitConfigureStore({ reducer: rootReducer })

export default store
