import "./herosection.scss";

function HeroImageSection() {
  return (
    <>
      <header id="heroImageComponent">
        <div id="intro" className="bg-image">
          <div className="mask">
            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row align-items-center">
                <div className="col-12">
                  <h1 className="mb-0 text-white page-title">Zeltlager</h1>
                </div>
              </div>
            </div>
            <div className="custom-shape-divider-bottom-1715590657">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroImageSection;
