import Layout from "../components/Layout/Layout";
import {Container, Divider} from "@mui/material";
import "../../src/styles/ProjectsStyles.css";
import { info } from "../info/Info";
import React, {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
const Projects = () => {
    const [sliderProjectData,setSliderProjectData]=useState(info.projects[0])
    const handleClickUp=()=>{
        if(sliderProjectData.id>0){
            const slider = info.projects[sliderProjectData.id-1];
            setSliderProjectData(slider)
        }

    }
    const handleClickDown=()=>{
        if(sliderProjectData.id<info.projects.length-1){
            const slider = info.projects[sliderProjectData.id+1];
            setSliderProjectData(slider)
        }

    }
    return(
        <Layout>
            <Container className="projectsContainer">
                <Divider sx={{height:"30px",border:"none"}}/>
                <ExpandLess className="projectsContainer-icon" onClick={() => handleClickUp()}/>
                <div>
                    <Divider sx={{height:"30px",border:"none"}}/>
                    <a href={sliderProjectData.projectLink} target="_blank" rel="noopener noreferrer">{sliderProjectData.id}-) {sliderProjectData.projectName} </a>
                    <p>{sliderProjectData.projectDesciription}</p>
                    {sliderProjectData.projectUsages.map((data,  i) => (
                        <p>{data} </p>
                    ))}
                </div>
                <ExpandMore className="projectsContainer-icon" onClick={() =>handleClickDown()}/>
            </Container>
        </Layout>
    )
}
export default Projects;