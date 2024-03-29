import { RECEIVE_USERS } from '../actions/users';
import { SAVE_QUESTION_ANSWER,CREATE_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
      
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
      case CREATE_QUESTION:
        // console.log ("action",action)
        return {
          ...state,
          [action.question.author]: {
            ...state[action.question.author],
            questions: state[action.question.author].questions.concat([action.question.id])
  
          },
        };

    default:
      return state;
  }
}
