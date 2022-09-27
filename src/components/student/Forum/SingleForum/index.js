import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import authHeader from "../../../features/auth/auth-header";
import SingleAnswer from "./SingleAnswer/index";
import Modal from "../../../Modal/index";
import successful from "../../../../assets/images/icons/successful.png";
import failed from "../../../../assets/images/icons/failed.png";

const SingleForum = () => {
  const [text, setText] = useState();
  const [person, setPerson] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("data") != null) {
      let data = JSON.parse(localStorage.getItem("data"));
      setPerson(data);
    }
  }, []);

  const [answers, setAnswers] = useState([]);
  const [type, setType] = useState([]);

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
          setType(response.data);
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
        setModal(
          <Modal
            icon={successful}
            message="Answer has been posted successfully."
            buttons={[
              {
                label: "Okay",
                actions: [() => window.location.reload(true)],
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
            message="Oops! Answer could not be posted. Please try again"
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
      {modal}
      <main>
        <h1 className="page-title">Answers</h1>
        <div className="page-content">
          <div className="row">
            <div className="card">
              <h2 className="card-title">{type.question}</h2>
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
                        <SingleAnswer name={item.userName} key={index}>
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
