const CreateCourse = () => {
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
              <h2 className="card-title">Pricing</h2>
              <div className="card-body">
                <div className="row">
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
          <div className="row grid2">
            <div className="card">
              <h2 className="card-title">Lecture 1 Details</h2>
              <div className="card-body">
                <div className="row">
                  <div className="input-group">
                    <input
                      type="text"
                      id="l2title"
                      placeholder="Title*"
                      required
                    />
                    <label htmlFor="l2title">Title*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="l2topic"
                      placeholder="Topic*"
                      required
                    />
                    <label htmlFor="l2topic">Topic*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="url"
                      id="l2video"
                      placeholder="Video Link*"
                      required
                    />
                    <label htmlFor="l2video">Video Link*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="l2attachment"
                      placeholder="Attachment(.pdf only)"
                    />
                    <label htmlFor="l2attachment">Attachment(.pdf only)</label>
                  </div>
                  <div className="input-group">
                    <textarea
                      rows="5"
                      placeholder="Description*"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <h2 className="card-title">Lecture 2 Details</h2>
              <div className="card-body">
                <div className="row">
                  <div className="input-group">
                    <input
                      type="text"
                      id="l2title"
                      placeholder="Title*"
                      required
                    />
                    <label htmlFor="l2title">Title*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="l2topic"
                      placeholder="Topic*"
                      required
                    />
                    <label htmlFor="l2topic">Topic*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="url"
                      id="l2video"
                      placeholder="Video Link*"
                      required
                    />
                    <label htmlFor="l2video">Video Link*</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="l2attachment"
                      placeholder="Attachment(.pdf only)"
                    />
                    <label htmlFor="l2attachment">Attachment(.pdf only)</label>
                  </div>
                  <div className="input-group">
                    <textarea
                      rows="5"
                      placeholder="Description*"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateCourse;
