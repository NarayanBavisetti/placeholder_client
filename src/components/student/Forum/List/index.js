import SingleForum from "./Single/index";

const Forum = () => {
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
                      placeholder="Type your doubt"
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
            </div>
          </div>
          <div className="row grid2">
            <SingleForum answers="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              asperiores, ratione nobis veniam expedita animi!
            </SingleForum>
            <SingleForum answers="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              asperiores, ratione nobis veniam expedita animi!
            </SingleForum>
            <SingleForum answers="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              asperiores, ratione nobis veniam expedita animi!
            </SingleForum>
            <SingleForum answers="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              asperiores, ratione nobis veniam expedita animi!
            </SingleForum>
          </div>
        </div>
      </main>
    </>
  );
};

export default Forum;
