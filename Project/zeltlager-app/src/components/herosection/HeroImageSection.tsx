import "./herosection.scss";

function HeroImageSection() {
  return (
    <>
      <header id="heroImageComponent">
        <section>
          <div id="intro" className="bg-image">
            <div className="mask">
              <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h1 className="mb-0 text-white display-1">Zeltlager</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <div className="container my-5 py-5"></div>
      </main>
    </>
  );
}

export default HeroImageSection;
