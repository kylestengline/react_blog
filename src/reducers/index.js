import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
//import reduxform, grab reducer property off it, then create var called formReducer.
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
