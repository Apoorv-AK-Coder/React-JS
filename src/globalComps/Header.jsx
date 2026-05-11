import logo from '../assets/logo.png';

export default function Header() {
    return (
        <div className="container newheader" id="newheader">
        <div className="row flex">
            <div className="logocol">
                <a href="/" style={{lineHeight:1}}><img src={logo} alt="logo" /></a>
            </div>
            <div className="column icon" id="on">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="navigate" id="view">
                <div id="off">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <nav>
                    <ul>
                        <li><a href="/"><i className='fa-solid fa-home'></i> Home</a></li>
                        <li><a href="./about.html"><i className='fa-solid fa-user'></i> About Us</a></li>
                        <li><a href="./contact.html"><i className='fa-solid fa-address-book'></i> Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    );
}
