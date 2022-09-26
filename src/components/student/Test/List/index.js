import SingleTest from "./Single/index";

const Test = () => {
  return (
    <>
      <main>
        <h1 className="page-title">All tests</h1>
        <div className="page-content">
          <div className="row grid2">
            <SingleTest
              title="Test 1"
              educator="Aaryan Khandelwal"
              date="06-10-2022"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nemo atque itaque perferendis at vitae consequuntur,
              magni inventore facere architecto voluptas illum ratione ut soluta
              enim. Autem nam blanditiis quod!
            </SingleTest>
            <SingleTest
              title="Test 2"
              educator="Aaryan Khandelwal"
              date="06-10-2022"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              quibusdam enim laborum porro maxime harum, ex optio amet
              laboriosam accusamus?
            </SingleTest>
          </div>
        </div>
      </main>
    </>
  );
};

export default Test;
