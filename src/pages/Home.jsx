import Layout from "../components/Layout/Layout";
import "../../src/styles/HomeStyles.css";

const Home= () =>{
    return(
        <Layout>
            <div className="container">
                <section className="picture-container">
                    <div className="home-info">
                        <p className="first-p">Hi, I'm Işıl</p>
                        <p className="second-p">I'm a Software Developer</p>
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