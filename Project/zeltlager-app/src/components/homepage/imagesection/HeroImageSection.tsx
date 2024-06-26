import CustomCountdown from "./CustomCountdown";
import "./herosection.scss";

function HeroImageSection() {
  return (
    <>
      <header id="heroImageComponent">
        <div id="intro" className="bg-image">
          <div className="mask">
            <div className="container d-flex justify-content-center align-items-center">
              <CustomCountdown />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroImageSection;
