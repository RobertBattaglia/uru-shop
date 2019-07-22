import Axios from "axios";
import API_URL from "../lib/API_URL";

export const fetchQuestionsSuccess = questions => ({
  type: "FETCH_QUESTIONS_SUCCESS",
  payload: questions
});

export const fetchQuestionsError = error => ({
  type: "FETCH_QUESTIONS_ERROR",
  error
});

export const fetchQuestions = prodId => {
  const url = `${API_URL}/qa/${prodId}`;
  return dispatch =>
    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchQuestionsSuccess(data.results));
      })
      .catch(err => {
        dispatch(fetchQuestionsError(err));
      });
};

export const postAddAnswer = (answer, name, email, photos, id) => {
  const url = `${API_URL}/qa/${id}/answers`;
  // console.log("post add answer answer: ", answer);
  // console.log("post add answer name: ", name);
  // console.log("post add answer email: ", email);
  // console.log("post add answer id: ", id);
  // console.log("post add answer photos[0]: ", photos);

  Axios.post(url, {
    body: answer,
    name,
    email,
    photos
  })
    .then(() => {
      console.log("Success to post AddAnswer");
    })
    .catch(() => {
      console.log("Fail to post AddAnswer");
    });
};

export const pullHelpful = id => {
  const url = `${API_URL}/qa/question/${id}/helpful`;
  console.log("id for pull: ", id);
  Axios.put(url, { question_id: id })
    .then(() => {
      console.log("success pull helpful");
    })
    .catch(() => {
      console.log("fail pull helpful");
    });
};

// export default fetchQuestions;
