import { articleReducer } from './articles/slice';
import { userReducer } from './user/slice';

const rootReducer = {
  articles: articleReducer,
  user: userReducer
};

export default rootReducer;
