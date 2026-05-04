import logo from './assets/logo.png';

export default function Footer() {
    return (
        <>
        <div className="container calling">
            <div className="row">
                <div className="column grid grid1">
                    <div>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        <br />
                        <button>Connect today!</button>
                    </div>
                    <div style={{textAlign:"center", margin:"auto 0"}}>
                        <h3>Newsletter</h3>
                        <br />
                        <form action="">
                            <input type="email" name="" placeholder='Enter your email ID' id="" />
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="container newfooter">
            <div className="row">
                <div className="grid grid3">
                    <div>
                        <img src={logo} width="125px" alt="" />
                        <br /><br />
                        <p><a href=""><i className='fa-brands fa-facebook'></i></a> &nbsp; <a href=""><i className='fa-brands fa-instagram'></i></a> &nbsp; <a href=""><i className='fa-brands fa-youtube'></i></a> &nbsp; <a href=""><i className='fa-brands fa-x-twitter'></i></a> &nbsp; <a href=""><i className='fa-brands fa-pinterest'></i></a></p>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <h4>Customer Services</h4>
                        <p><i className='fa-solid fa-location-dot'></i> New Delhi, 110091</p>
                        <hr />
                        <p><i className='fa-solid fa-phone'></i> <a href="tel:+910000000000">+91-00000 00000</a></p>
                        <hr />
                        <p><i className='fa-solid fa-envelope-open'></i> <a href="mailto:example@gmail.com">example@gmail.com</a></p>
                    </div>
                </div>
                <hr />
                <p style={{lineHeight:1, fontSize:13}}>© Copyright 2026 <b>Dummy</b>. All Rights Reserved.</p>
            </div>
        </div>
        </>
    );
}