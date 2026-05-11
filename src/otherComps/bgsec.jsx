import {usps} from './data.js'

export default function Bgsec() {
  return (
    <div className="container">
      <div className="bgsec">
        <div className="row grid grid1">
          <div></div>
          <div className="column">
            <h2>Lorem Ipsum is simply dummy text</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          <div className="column">
            <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
            <br />
            <div className="grid grid1">
              {usps.map((uspItem)=> <Datainner key={uspItem.title} {...uspItem}></Datainner>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Datainner({title, description, image}) {
  return (
    <div className="colum" style={{ backgroundImage: `url(${image})` }}>
      <a href="">
        <div className="colu">
          <h3>{title}</h3>
          <p>{description}</p>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </a>
    </div>
  );
}
