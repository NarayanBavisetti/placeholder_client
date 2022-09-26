import { useState } from "react";
import SingleLecture from "./SingleLecture/index";

const CreateCourse = () => {
  const [lectures, setLecture] = useState([<SingleLecture sno="1" />]);

  const addLecture = () => {
    const element = <SingleLecture sno={lectures.length + 1} />;
    setLecture(lectures.concat(element));
  };

  return (
    <>
      <main>
        <h1 className="page-title">Create a new course</h1>
        <div className="page-content">
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
                      required
                    />
                    <label htmlFor="title">Title*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="date"
                      id="date"
                      placeholder="Start Date*"
                      required
                    />
                    <label htmlFor="date">Start Date*</label>
                  </div>
                  <div className="input-group">
                    <textarea
                      id="description"
                      rows="5"
                      placeholder="Description*"
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
                    <select required>
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
                      id="oprice"
                      placeholder="Original Price*"
                      required
                    />
                    <label htmlFor="oprice">Original Price*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="number"
                      id="dprice"
                      placeholder="Discounted Price*"
                      required
                    />
                    <label htmlFor="dprice">Discounted Price*</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid2">{lectures}</div>
          <div className="row">
            <button
              type="button"
              className="btn-theme"
              style={{ width: "min-content" }}
              onClick={addLecture}
            >
              Add Lecture&nbsp;&nbsp;<i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateCourse;
