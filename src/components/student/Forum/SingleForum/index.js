import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authHeader from "../../../features/auth/auth-header";
import SingleAnswer from "./SingleAnswer/index";

const SingleForum = () => {
  const [text, setText] = useState();
  const [person, setPerson] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      let data = JSON.parse(localStorage.getItem("data"));
      setPerson(data);
    }
  }, []);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    allAnswers();
  }, []);

  const allAnswers = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_URL}/forum/answer/${params.id}`, {
          headers: authHeader(),
        })
        .then((response) => {
          setAnswers(response.data.comments);
        })
        .catch((response) => {
          alert(response.response.data.message);
        });
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = person.name;
    const userId = person._id;
    const values = {
      content: text,
      userName,
      userId,
      id: params.id,
    };

    axios
      .post(`${process.env.REACT_APP_URL}/forum/answer`, values, {
        headers: authHeader(),
      })
      .then((response) => {
        alert(response.data.message);
        navigate("/forum");
      })
      .catch((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <main>
        <h1 className="page-title">Answers</h1>
        <div className="page-content">
          <div className="row">
            <div className="card">
              <h2 className="card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                ut suscipit vitae pariatur eius autem.
              </h2>
              <div className="card-body">
                <form method="post">
                  <div className="row">
                    <div className="input-group">
                      <textarea
                        id="answer"
                        rows="5"
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type your answer"
                        required
                      ></textarea>
                    </div>
                    <div className="input-group">
                      <button onClick={onSubmit} className="btn-theme">
                        Post
                      </button>
                    </div>
                  </div>
                </form>
                <div className="forum-answers">
                  {answers.map((item, index) => {
                    return (
                      <>
                        <SingleAnswer name={item.userName}>
                          {item.content}
                        </SingleAnswer>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleForum;
