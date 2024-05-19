import "./formcard.scss";

function FormCard() {
  return (
    <div className="contact-form-card">
      <div className="card">
        <div className="card-body">
          <h1>Kontakt</h1>

          <form>
            <div className="row needs-validation mb-3">
              <div className="col-12 col-lg-6">
                <label htmlFor="firstName">Vorname</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                />
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="lastName">Nachname</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="row needs-validation  mb-3">
              <div className="col-12">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@beispiel.com"
                  required
                />
              </div>
            </div>

            <div className="row needs-validation mb-3">
              <div className="col-12">
                <label htmlFor="phone">Telefonnummer (optional)</label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Worum gehts?
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
                required
              ></textarea>
            </div>

            <p className="disclaimer">
              Alle Daten werden selbstverständlich nur dafür genutzt, Ihrer
              Anfrage nachzukommen.
            </p>

            <hr />
            <h3>Add reCaptcha!</h3>
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary col-5 col-lg-2"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
