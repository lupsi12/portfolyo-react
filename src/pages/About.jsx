import Layout from "../components/Layout/Layout";
import {Container} from "@mui/material";
import "../../src/styles/AboutStyles.css";
import { info } from "../info/Info";
import {useEffect, useState} from "react";
const About = () => {
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


    return(
        <Layout>
            <Container className="containerAbout">
                <div>
                    <p><TypingEffect text={info.about[0].firstPart} speed={100}/></p>
                    <p><TypingEffect text={info.about[0].secondPart} speed={100}/></p>
                    <p><TypingEffect text={info.about[0].thirdPart} speed={100}/></p>
                    <p><TypingEffect text={info.about[0].secondPart} speed={100}/></p>
                    <p><TypingEffect text={info.about[0].thirdPart} speed={100}/></p>
                </div>
            </Container>
        </Layout>
    )
}
export default About;