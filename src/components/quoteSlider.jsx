import React, {useState} from 'react';

function QuoteSlider(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const slides = [
        {position:"CTO Indeed", name:"Matt Damon", text:"Strong experience working with AWS and ex all together have +30 years of experience. Excellent experience in a backend development, using a variety of technologies"},
        {position:"CCO Skybook", name:"Christine McDonald", text:"Folks who never do any more than they get paid for, never get paid for any more than they do"},
        {position:"CTO Santander", name:"Sergio Bonte", text:"The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope"},
        {position:"CTO BBVA", name:"Livia Joss", text:"In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing"},
        {position:"LT BBVA", name:"Enrique Sola", text:"Strong experience working with AWS and ex all together have +30 years of experience. Excellent experience in a backend development, using a variety of technologies"}
    ];

    const previous = () => {
        if(selectedIndex !== 0) {
            setSelectedIndex(index => index-1);
        }
    }

    const next = () => {
        if(selectedIndex !== slides.length - 1) {
            setSelectedIndex(index => index+1);
        }
    }

    return (
        <div>
            <div className="d-flex ml-n2 mr-n2" style={{height:140}}>
                <div className="quote my-auto py-2 px-3 hover-edit">
                    <a href="#/" className="edit-button"><span className="material-icons">edit</span></a>
                    <blockquote className="mb-0">{slides[selectedIndex].text}</blockquote>
                </div>
            </div>

            <ul className="list-inline d-flex mb-0">
                <li className="list-inline-item mr-auto">
                    <p className="mb-0 text-primary font-weight-bold">{slides[selectedIndex].position}</p>
                    <p className="mb-0">{slides[selectedIndex].name}</p>
                </li>
                <li className="list-inline-item ml-auto my-auto">
                    <div id="navigation" className="text-center">
                        <ul className="list-inline d-flex">
                            <li className="list-inline-item my-auto">
                                <a href="#/" className="text-black-50" onClick={previous}><span className="material-icons material-icons-outlined md-32">chevron_left</span></a>
                            </li>
                            <li className="list-inline-item my-auto">
                                {selectedIndex+1}/{slides.length}
                            </li>
                            <li className="list-inline-item my-auto">
                                <a href="#/" className="text-black-50" onClick={next}><span className="material-icons material-icons-outlined md-32">chevron_right</span></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default QuoteSlider;