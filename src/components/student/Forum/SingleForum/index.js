import SingleAnswer from "./SingleAnswer/index";

const SingleForum = () => {
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
                        placeholder="Type your answer"
                        required
                      ></textarea>
                    </div>
                    <div className="input-group">
                      <button type="submit" className="btn-theme">
                        Post
                      </button>
                    </div>
                  </div>
                </form>
                <div className="forum-answers">
                  <SingleAnswer name="Aaryan Khandelwal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium vel eum commodi recusandae fuga rerum veritatis,
                    mollitia at deleniti fugit reiciendis sint deserunt
                    consequatur natus ut quasi illum, quae ducimus.
                  </SingleAnswer>
                  <SingleAnswer name="Aaryan Khandelwal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium vel eum commodi recusandae fuga rerum veritatis,
                    mollitia at deleniti fugit reiciendis sint deserunt
                    consequatur natus ut quasi illum, quae ducimus.
                  </SingleAnswer>
                  <SingleAnswer name="Aaryan Khandelwal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium vel eum commodi recusandae fuga rerum veritatis,
                    mollitia at deleniti fugit reiciendis sint deserunt
                    consequatur natus ut quasi illum, quae ducimus.
                  </SingleAnswer>
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
