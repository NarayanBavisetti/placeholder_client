import { useState } from "react";

const CreateCourse = () => {
  const [questions, setQuestions] = useState([
    {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    },
    {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...questions];
    list[index][name] = value;
    setQuestions(list);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      },
    ]);
  };

  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [duration, setDuration] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const values = {
      title,
      date,
      description,
      category,
      duration,
    };
  };

  return (
    <>
      <main>
        <h1 className="page-title">Create a new course</h1>
        <div className="page-content">
          <form onSubmit={onSubmit} method="post">
            <button type="submit" className="btn-theme">
              Create Test
            </button>
            <div className="row grid2">
              <div className="card">
                <h2 className="card-title">Basic details</h2>
                <div className="card-body">
                  <div className="row">
                    <div className="input-group">
                      <input
                        type="text"
                        id="title"
                        placeholder="Title*"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                      <label htmlFor="title">Title*</label>
                    </div>
                    <div className="input-group">
                      <input
                        type="date"
                        id="date"
                        placeholder="Start Date*"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                      <label htmlFor="date">Start Date*</label>
                    </div>
                    <div className="input-group">
                      <textarea
                        id="description"
                        rows="5"
                        placeholder="Description*"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="card-title">Other Details</h2>
                <div className="card-body">
                  <div className="row">
                    <div className="input-group">
                      <select
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option value="">--Select category--</option>
                        <option value="JEE mains/Advance">
                          JEE mains/Advance
                        </option>
                        <option value="NEET">NEET</option>
                        <option value="UPSC">UPSC</option>
                        <option value="GATE">GATE</option>
                        <option value="CAT">CAT</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <input
                        type="number"
                        id="duration"
                        placeholder="Duration(in mins)*"
                        onChange={(e) => setDuration(e.target.value)}
                        required
                      />
                      <label htmlFor="duration">Duration(in mins)*</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row grid2">
              {questions &&
                questions.map((create, index) => {
                  return (
                    <div className="card" key={index}>
                      <h2 className="card-title">
                        Question {index + 1} Details
                      </h2>
                      <div className="card-body">
                        <div className="row">
                          <div className="input-group">
                            <input
                              type="text"
                              name="question"
                              value={create.question}
                              onChange={(e) => handleChange(e, index)}
                              id={"q" + (index + 1) + "question"}
                              placeholder="Question"
                            />
                            <label htmlFor={"q" + (index + 1) + "question"}>
                              Question
                            </label>
                          </div>
                        </div>
                        <div className="row grid2">
                          <div className="input-group">
                            <input
                              type="text"
                              name="optionA"
                              value={create.optionA}
                              onChange={(e) => handleChange(e, index)}
                              id={"q" + (index + 1) + "optionA"}
                              placeholder="Option A"
                            />
                            <label htmlFor={"q" + (index + 1) + "optionA"}>
                              Option A
                            </label>
                          </div>
                          <div className="input-group">
                            <input
                              type="text"
                              name="optionB"
                              value={create.optionB}
                              onChange={(e) => handleChange(e, index)}
                              id={"q" + (index + 1) + "optionB"}
                              placeholder="Option B"
                            />
                            <label htmlFor={"q" + (index + 1) + "optionB"}>
                              Option B
                            </label>
                          </div>
                          <div className="input-group">
                            <input
                              type="text"
                              name="optionC"
                              value={create.optionC}
                              onChange={(e) => handleChange(e, index)}
                              id={"q" + (index + 1) + "optionC"}
                              placeholder="Option C"
                            />
                            <label htmlFor={"q" + (index + 1) + "optionC"}>
                              Option C
                            </label>
                          </div>
                          <div className="input-group">
                            <input
                              type="text"
                              name="optionD"
                              value={create.optionD}
                              onChange={(e) => handleChange(e, index)}
                              id={"q" + (index + 1) + "optionD"}
                              placeholder="Option D"
                            />
                            <label htmlFor={"q" + (index + 1) + "optionD"}>
                              Option D
                            </label>
                          </div>
                          <div className="input-group">
                            <input
                              type="text"
                              name="correctOption"
                              value={create.correctOption}
                              onChange={(e) => handleChange(e, index)}
                              id={"q" + (index + 1) + "correctOption"}
                              placeholder="Correct Option"
                            />
                            <label
                              htmlFor={"q" + (index + 1) + "correctOption"}
                            >
                              Correct Option
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="row">
              <button
                type="button"
                className="btn-theme"
                style={{ width: "min-content" }}
                onClick={addQuestion}
              >
                Add Question&nbsp;&nbsp;<i className="fas fa-plus"></i>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateCourse;
