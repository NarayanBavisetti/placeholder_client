import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authHeader from "../../../features/auth/auth-header";
import SingleForum from "./Single/index";
import Modal from "../../../Modal/index";
import successful from "../../../../assets/images/icons/successful.png";
import failed from "../../../../assets/images/icons/failed.png";

const Forum = () => {
  const [text, setText] = useState();
  const [person, setPerson] = useState([]);
  const navigate = useNavigate();

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      let data = JSON.parse(localStorage.getItem("data"));
      setPerson(data);
    }
  }, []);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    allForums();
  }, []);

  const allForums = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_URL}/forum`, {
          headers: authHeader(),
        })
        .then((response) => {
          setQuestions(response.data);
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
      question: text,
      userName,
      userId,
    };

    axios
      .post(`${process.env.REACT_APP_URL}/forum`, values, {
        headers: authHeader(),
      })
      .then((response) => {
        setModal(
          <Modal
            icon={successful}
            message="Question has been posted successfully."
            buttons={[
              {
                label: "Okay",
                actions: [() => navigate("/forum")],
              },
            ]}
            close={() => setModal(null)}
          />,
        );
      })
      .catch((response) => {
        setModal(
          <Modal
            icon={failed}
            message="Oops! Question could not be posted. Please try again"
            buttons={[
              {
                label: "Close",
                close: true,
              },
            ]}
            close={() => setModal(null)}
          />,
        );
      });
  };

  return (
    <>
      <main>
        <h1 className="page-title">QnA Forum</h1>
        <div className="page-content">
          <div className="row">
            <div className="card">
              <form method="post">
                <div className="row">
                  <div className="input-group">
                    <textarea
                      id="doubt"
                      rows="5"
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Type your doubt"
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
            </div>
          </div>
          <div className="row grid2">
            {questions.map((item, index) => {
              return (
                <>
                  <SingleForum answers="5" link={item._id}>
                    {item.question}
                  </SingleForum>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Forum;
