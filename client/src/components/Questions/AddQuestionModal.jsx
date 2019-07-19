import React, { Component } from "react";
import AnswerModal from "./AnswerModal";

class AddQuestionModal extends Component {
  render() {
    let questions = this.props.questions;
    console.log("question ", questions);

    if (questions) {
      return (
        <div>
          {questions.map(question => {
            let {
              question_body,
              question_id,
              question_helpfulness,
              answers
            } = question;

            return (
              <div key={`questionID:${question_id}`}>
                <label style={{ fontWeight: "bold", fontSize: 12 }}>
                  Q: {question_body}
                </label>
                <label style={{ textAlign: "right", fontSize: 8 }}>
                  {" "}
                  Helpful?{"    "}
                </label>
                <label style={{ textDecorationLine: "underline", fontSize: 8 }}>
                  Yes
                </label>
                <label style={{ textAlign: "right", fontSize: 8 }}>
                  {`(${question_helpfulness})`}
                  {"    "}|{"    "}
                </label>
                <label style={{ textDecorationLine: "underline", fontSize: 8 }}>
                  Add Answer
                </label>
                <br />
                <AnswerModal answers={answers} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default AddQuestionModal;
