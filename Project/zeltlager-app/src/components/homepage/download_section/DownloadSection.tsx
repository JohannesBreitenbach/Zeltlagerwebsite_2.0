import "./downloadsection.scss";

function DownloadSection() {
  return (
    <div
      id="download-section"
      className="container-fluid d-flex align-items-center justify-content-center"
    >
      <div className="container p-3 border-1">
        <h1>DownloadSeciton</h1>
        <div>
          <button className="btn btn-primary">Aktueller Flyer</button>
          <button className="btn btn-primary">Aktuelle Anmeldung</button>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
