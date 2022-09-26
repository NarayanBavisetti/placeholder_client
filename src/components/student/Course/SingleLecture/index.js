const SingleLecture = () => {
  return (
    <>
      <main>
        <h1 className="page-title">Lecture Title</h1>
        <div className="page-content">
          <div className="row">
            <div className="card">
              <h2 className="card-title"></h2>
              <iframe
                src="https://www.youtube.com/embed/TSKW7Untw8I"
                className="lecture-video"
                title="Lecture Title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleLecture;
