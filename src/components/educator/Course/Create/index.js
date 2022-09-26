import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authHeader from "../../../features/auth/auth-header";
import CourseAPI from "../../../features/auth/courseAPI";

const CreateCourse = () => {
  const [lectures, setLectures] = useState([
    {
      title: "",
      topic: "",
      video: "",
      description: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...lectures];
    list[index][name] = value;
    setLectures(list);
  };

  const addLecture = () => {
    setLectures([
      ...lectures,
      {
        title: "",
        topic: "",
        videoLink: "",
        description: "",
      },
    ]);
  };

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [pDate, setDate] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [pOriginalPrice, setOriginalPrice] = useState();
  const [pdiscountedPrice, setDiscountedPrice] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    let date = Date.parse(pDate);
    let discountedPrice = parseInt(pdiscountedPrice);
    let originalPrice = parseInt(pOriginalPrice);
    // let   educatorId = 
    const values = {
      title,
      date,
      description,
      category,
      originalPrice,
      discountedPrice,
      lectures,
      // educatorId,
      // educatorName,
    };

    axios
      .post(`${process.env.REACT_APP_URL}/educator/course`, values, {
        headers: authHeader(),
      })
      .then((response) => {
        alert(response.data.message);
        navigate("/mycourses");
      })
      .catch((response) => {
        console.log(response.response.data.message);
      });
  };

  return (
    <>
      <main>
        <h1 className="page-title">Create a new course</h1>
        <div className="page-content">
          <form onSubmit={onSubmit} method="post">
            <button type="submit" className="btn-them">
              Create Course
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
                        id="oprice"
                        placeholder="Original Price*"
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        required
                      />
                      <label htmlFor="oprice">Original Price*</label>
                    </div>
                    <div className="input-group">
                      <input
                        type="number"
                        id="dprice"
                        placeholder="Discounted Price*"
                        onChange={(e) => setDiscountedPrice(e.target.value)}
                        required
                      />
                      <label htmlFor="dprice">Discounted Price*</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row grid2">
              {lectures &&
                lectures.map((create, index) => {
                  return (
                    <div className="card">
                      <h2 className="card-title">
                        Lecture {index + 1} Details
                      </h2>
                      <div className="card-body">
                        <div className="row">
                          <div className="input-group">
                            <input
                              type="text"
                              name="title"
                              value={create.title}
                              onChange={(e) => handleChange(e, index)}
                              id={"l" + (index + 1) + "title"}
                              placeholder="Title"
                            />
                            <label htmlFor={"l" + (index + 1) + "title"}>
                              Title
                            </label>
                          </div>
                          <div className="input-group">
                            <input
                              type="text"
                              name="topic"
                              value={create.topic}
                              onChange={(e) => handleChange(e, index)}
                              id={"l" + (index + 1) + "topic"}
                              placeholder="Topic"
                            />
                            <label htmlFor={"l" + (index + 1) + "topic"}>
                              Topic
                            </label>
                          </div>
                          <div className="input-group">
                            <input
                              type="url"
                              name="video"
                              value={create.video}
                              onChange={(e) => handleChange(e, index)}
                              id={"l" + (index + 1) + "video"}
                              placeholder="Video Link"
                            />
                            <label htmlFor={"l" + (index + 1) + "video"}>
                              Video Link
                            </label>
                          </div>
                          <div className="input-group">
                            <textarea
                              name="description"
                              value={create.description}
                              onChange={(e) => handleChange(e, index)}
                              rows="5"
                              placeholder="Description"
                            ></textarea>
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
                onClick={addLecture}
              >
                Add Lecture&nbsp;&nbsp;<i className="fas fa-plus"></i>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateCourse;
