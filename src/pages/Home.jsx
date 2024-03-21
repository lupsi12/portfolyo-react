import Layout from "../components/Layout/Layout";
import "../../src/styles/HomeStyles.css";

const Home= () =>{
    return(
        <Layout>
            <div className="container">
                <section className="picture-container">
                    <div className="home-info">
                        <h1 className="h1">Hi, I'm Işıl</h1>
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