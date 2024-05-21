import React from "react";
import "./downloadsection.scss";

function DownloadSection() {
  return (
    <div
      id="download-section"
      className="container-fluid d-flex align-items-center justify-content-center"
    >
      <div className="container py-5 border-1">
        <div className="d-flex align-items-center justify-content-around flex-column flex-sm-row gap-2">
          <a
            href="C:\Users\Johannes\Repositories\WebProject\Project\zeltlager-app\src\assets\pdf\Zeltlagerflyer2024.pdf"
            download
            className="btn btn-primary"
          >
            Flyer herunterladen
          </a>
          <a
            href="/assets/pdf/Zeltlageranmeldung2024.pdf"
            download
            className="btn btn-primary"
          >
            Anmeldung herunterladen
          </a>
          <a
            href="/assets/pdf/Zeltlagerplakat2024.pdf"
            download
            className="btn btn-primary"
          >
            Plakat herunterladen
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
