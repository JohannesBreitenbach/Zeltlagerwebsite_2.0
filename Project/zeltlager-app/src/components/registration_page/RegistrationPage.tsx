function RegistrationPage() {
  return (
    <>
      <div className="container-fluid p-4">
        <div>
          <div className="row">
            <h2 className="col-lg-12">Anmeldung</h2>
          </div>
          <form>
            <div className="row needs-validation">
              <div className="col-12 col-lg-6 form-group">
                <label htmlFor="calendar">Date of concert:</label>
                <select name="calendar" className="form-select" required>
                  <option value="">Select a date</option>
                  <option>01.04.2020</option>
                  <option>02.04.2020</option>
                  <option>03.04.2020</option>
                  <option>04.04.2020</option>
                  <option>05.04.2020</option>
                  <option>06.04.2020</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid date
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="location">Location</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      id="bolzano"
                      className="form-check-input"
                      name="location"
                      type="radio"
                    />
                    <label htmlFor="bolzano" className="form-check-label">
                      Bolzano/Bozen
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      id="merano"
                      className="form-check-input"
                      name="location"
                      type="radio"
                    />
                    <label htmlFor="merano">Merano/Meran</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row needs-validation">
              <div className="col-12 col-lg-6">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
              </div>
            </div>

            <div className="row needs-validation">
              <div className="col-12">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
            </div>

            <div className="row needs-validation">
              <div className="col-12 col-lg-4">
                <label htmlFor="country">Country</label>
                <select id="country" className="form-select" required>
                  <option selected disabled value="">
                    Select your country
                  </option>
                  <option>Deutschland</option>
                  <option>France</option>
                  <option>Italia</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid Country
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <label htmlFor="state">City</label>{" "}
                <input
                  id="city"
                  className="form-control col-4"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <label htmlFor="zip">Zip</label>{" "}
                <input
                  type="text"
                  className="form-control col-4"
                  id="zip"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <hr />

            <h1>Add reCaptcha?</h1>

            <hr />

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
    </>
  );
}

export default RegistrationPage;
