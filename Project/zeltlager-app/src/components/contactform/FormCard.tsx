function FormCard() {
  return (
    <div className="contact-form-container">
      <div className="contact-form-card">
        <div className="card">
          <div className="card-body">
            {/* Your contact form content goes here */}
            <h2>Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea id="message" className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
