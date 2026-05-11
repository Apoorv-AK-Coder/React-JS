export default function MainBanner({children}) {
  return (
    <div className="container HomeBanner">
      <div className="row">
        <div className="column">
          <h1>{children}</h1>
          <br />
          <button>
            Learn More <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
