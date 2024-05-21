import "./downloadsection.scss";

function DownloadSection() {
  return (
    <div
      id="download-section"
      className="container-fluid d-flex align-items-center justify-content-center"
    >
      <div className="container py-5 border-1">
        <div className="d-flex align-items-center justify-content-around flex-column flex-sm-row gap-2">
          <button className="btn btn-primary">Flyer herunterladen</button>
          <button className="btn btn-primary">Anmeldung herunterladen</button>
          <button className="btn btn-primary">Plakat herunterladen</button>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
