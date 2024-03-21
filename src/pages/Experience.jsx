import Layout from "../components/Layout/Layout";
import {Container} from "@mui/material";
import "../../src/styles/ExperienceStyles.css";

const Experience = () => {
    return(
        <Layout>
            <Container maxWidth="md">
                <div
                    style={{
                        backgroundColor: "blueviolet",
                        height: "50em",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1>Işıl <span
                        style={{ color: 'pink' }}>"Experience" </span>
                        life
                    </h1>
                </div>
            </Container>
        </Layout>
    )
}
export default Experience;