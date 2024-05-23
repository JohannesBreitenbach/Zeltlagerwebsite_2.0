import "./enrolsection.scss";

function EnrolSection() {
  return (
    <div id="enrol-section" className="w-100 d-flex  justify-content-center">
      <div
        id="enrol-container"
        className="d-flex align-items-center justify-content-between py-5 px-2 px-md-0"
      >
        <h2>Jetzt anmelden!</h2>
        <a>
          <button className="btn btn-primary">Zur Anmeldung ➔</button>
        </a>
      </div>
    </div>
  );
}

export default EnrolSection;
