import Layout from "../components/Layout/Layout";
import "../../src/styles/CertificatesStyles.css";
import { info } from "../info/Info";
import React, {useState} from "react";
import {Container} from "@mui/material";

const Certificates = () => {
    const [sliderData,setSliderData]=useState(info.certificates[0])
    const handleClick=(index)=>{
        console.log(index)
        const slider = info.certificates[index];
        setSliderData(slider)
    }
    return(
        <Layout>
            <Container maxWidth="md" className="containerCertificate">
                <img src={sliderData.image} height="500" width="800" alt=""/>
                <div>{sliderData.id}-) {sliderData.text} </div>
                <div className="click">
                    {info.certificates.map((data, i) => (
                        <img key={data.id} src={data.image} onClick={() => handleClick(i)} height="40" width="50" alt=""/>
                    ))}
                </div>
            </Container>
        </Layout>
    )
}
export default Certificates;