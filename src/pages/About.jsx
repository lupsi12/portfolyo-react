import Layout from "../components/Layout/Layout";
import {Container} from "@mui/material";
import "../../src/styles/AboutStyles.css";
import { info } from "../info/Info";
const About = () => {
    return(
        <Layout>
            <Container className="containerAbout">
                <div>
                    <p>{info.about[0].firstPart}</p>
                    <p>{info.about[0].secondPart}</p>
                </div>
            </Container>
        </Layout>
    )
}
export default About;