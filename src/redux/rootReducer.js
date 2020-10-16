import { combineReducers } from 'redux'
import usersReducer from './users/userReducer'
import userReducer from './user/userReducer'
const rootReducer = combineReducers({
  allusers: usersReducer,
  users:userReducer
  
})

export default rootReducer
