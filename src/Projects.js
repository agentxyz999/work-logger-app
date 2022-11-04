import React from 'react';
import Card from 'react-bootstrap/Card';
import './assets/Projects.css';

function Projects({ personalProjects, workProjects }){

    let personalTotalTIme = 0;
    let workTotalTIme = 0;

    personalProjects.forEach((item) => {
        personalTotalTIme += parseInt(item.duration);
    });

    workProjects.forEach((item) => {
        workTotalTIme += parseInt(item.duration);
    });

    //get personal projects from local storage
    const personalProjectsList = personalProjects 
        .sort((a, b) => b.duration - a.duration)
        .map((personalProjects) => {
        return(       
            <p style={{color: 'green'}}>{ personalProjects.duration } <span> - { personalProjects.description }</span></p>   
        );  
    });

    //get work projects from local storage
    const workProjectsList = workProjects
        .sort((a, b) => b.duration - a.duration)
        .map((workProject) => {
        return(
            <p style={{color: 'green'}}>{ workProject.duration }<span> - { workProject.description }</span></p>
        );  
    });

    return (
            <div className='container mt-1'>
                <h2 className='text-center'>Projects</h2>
                <div className='all-projects-container'>
                    <Card className='personalProjects-container' key={personalProjects.id}>
                        <Card.Header className='card-header'>
                            <h3 className='text-left'> Personal </h3>
                            <p style={{color: '#0D6BF7', fontSize: '20px'}}> {personalTotalTIme} </p>
                        </Card.Header>
                        <Card.Body>
                            {personalProjectsList}
                        </Card.Body>
                    </Card>
                    
                    <Card className='workProject-container' key={workProjects.id}>
                        <Card.Header className='card-header'>
                                <h3> Work </h3>
                                <p style={{color: '#0D6BF7', fontSize: '20px'}}> {workTotalTIme} </p>
                        </Card.Header>
                        <Card.Body>
                            {workProjectsList}
                        </Card.Body>
                    </Card>
                </div>   
            </div>    
    );
}
export default Projects;