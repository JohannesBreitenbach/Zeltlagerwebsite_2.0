import "./sponsorsection.scss";

function SponsorSection() {
  return (
    <>
      <div id="sponsor-section">
        <h2>Das Zeltlager wird unterstützt von:</h2>
        <section className="cardContainer d-flex justify-content-around align-items-center p-4">
          <div className="card">
            <img
              src="/src/assets/img/Vogelperspektive.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="/src/assets/img/Vogelperspektive.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="/src/assets/img/Vogelperspektive.jpeg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SponsorSection;
