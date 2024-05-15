import "./sponsorsection.scss";

function SponsorSection() {
  return (
    <>
      <div id="sponsor-section" className="p-5">
        <h2>Das Zeltlager wird unterstützt von:</h2>
        <section className="cardContainer d-flex justify-content-around align-items-center pt-2">
          <div className="card">
            <img
              src="/src/assets/img/Faust_logo.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Faust - das beste Bier der Welt.</p>
            </div>
          </div>
          <div className="card">
            <img
              src="/src/assets/img/lions_club.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Lions Club Aschaffenburg</p>
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
