import {useState} from 'react';
import Example from './data.js';

export default function Tabs() {
    const [sltBtn, setBtn] = useState();

    function HandleBtn(sltdBtn) {
        setBtn(sltdBtn);
    }

    const tabKeys = ['Tab', 'Tab1', 'Tab2', 'Tab3'];

    return (
        <div className="container gallery">
            <div className="row" style={{paddingBlock:0}}>
                <div className="column">
                    <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
                    <br />
                    {tabKeys.map((tab) =>
                        <NewTab key={tab} isSelected = {sltBtn === tab} onClick={()=>HandleBtn(tab)}>{tab}</NewTab>
                    )}
                    {/* <NewTab isSelected={sltBtn === 'Tab'} onClick={() => HandleBtn('Tab')}>Tab</NewTab> &nbsp; &nbsp;
                    <NewTab isSelected={sltBtn === 'Tab1'} onClick={() => HandleBtn('Tab1')}>Tab1</NewTab> &nbsp; &nbsp;
                    <NewTab isSelected={sltBtn === 'Tab2'} onClick={() => HandleBtn('Tab2')}>Tab2</NewTab> &nbsp; &nbsp;
                    <NewTab isSelected={sltBtn === 'Tab3'} onClick={() => HandleBtn('Tab3')}>Tab3</NewTab> */}

                    {!sltBtn ? <p>Click a button</p> :  <div>
                        <h3>{Example[sltBtn].title}</h3>
                        <p>{Example[sltBtn].description}</p>
                    </div>}
                </div>
            </div>
        </div>
    );

    function NewTab({children, isSelected, ...props}) {
        return (
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        );
    }
}