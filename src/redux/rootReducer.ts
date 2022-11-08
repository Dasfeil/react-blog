import { articleReducer } from './articles/slice';
import { counterReducer } from './counter/slice';

const rootReducer = {
  counter: counterReducer,
  articles: articleReducer
};

export default rootReducer;
