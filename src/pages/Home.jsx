import Layout from "../components/Layout/Layout";
import "../../src/styles/HomeStyles.css";
import {useEffect, useState} from "react";
const TypingEffect = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentText = '';
        let index = 0;

        const interval = setInterval(() => {
            if (index < text.length) {
                currentText += text[index];
                setDisplayText(currentText);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayText}</span>;
};


const Home= () =>{
    return(
        <Layout>
            <div className="container">
                <section className="picture-container">
                    <div className="home-info">
                        <h1 className="h1"> <TypingEffect text="Hi, I'm Işıl" speed={100} /></h1>
                        <p className="p">I'm a Software Developer</p>
                    </div>
                    <div className="picture">
                        <div>
                            <img src="/img/me.jpeg" alt="Self Portrait"/>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
export default Home;