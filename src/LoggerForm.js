import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Projects from './Projects'
import './assets/LoggerForm.css';

function LoggerForm(){
    const [type, setType] = useState('personal');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [workProjects, setWorkProjects] = useState([]);
    const [personalProjects, setPersonalProjects] = useState([]);
    
    //Useeffect in every render
    useEffect(() => {
        const workProjectsJSON = JSON.parse(localStorage.getItem("work"));
        if (workProjectsJSON){
            setWorkProjects(workProjectsJSON);
        }
    }, []);

    //Useeffect in every render
    useEffect(() => {
        const personalProjectsJSON = JSON.parse(localStorage.getItem("personal"));
        if (personalProjectsJSON){
            setPersonalProjects(personalProjectsJSON);
        }
    }, []);

    //rerender when personal projects changed
    useEffect(() => {
        localStorage.setItem("personal", JSON.stringify(personalProjects));
    }, [personalProjects]);
    
    //rerender when work projects changed
     useEffect(() => {
        localStorage.setItem("work", JSON.stringify(workProjects));
    }, [workProjects]);

    //form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const project = {
            id: new Date().valueOf().toString(),
            type: type,
            description: description,
            duration: duration
        }
        if(project.type === "personal"){
            setPersonalProjects([...personalProjects, project]);
        } else{
            setWorkProjects([...workProjects, project]);
        }
        setDescription('');
        setDuration('');
    }

    return (
        <div className='container'>
            <Form onSubmit={ handleSubmit }>
                <h1 className='text-center'>Work Logger</h1>
                <Form.Group className="mb-3">
                    <Form.Select value={type} onChange={ e => setType(e.target.value) } >
                        <option value='personal'>Personal</option>
                        <option value='work'>Work</option>
                    </Form.Select>
                    <Form.Text>Select the type of work</Form.Text>     
                </Form.Group>

                <Form.Group className="mb-3">
                    <FloatingLabel label="Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Things to do...."
                            name='description' 
                            value={description} 
                            type="textarea"
                            onChange={ e => setDescription(e.target.value) }
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Form.Text>Describe what you want to do...</Form.Text>  
                </Form.Group>

                <Form.Group className="mb-3">
                    <FloatingLabel label="Duration">
                        <Form.Control
                            placeholder="Duration"
                            name='duration' 
                            value={duration} 
                            type="text"
                            onChange={e => setDuration(e.target.value)}
                            style={{ width: '120px' }}
                            required 
                        />
                    </FloatingLabel>
                    <Form.Text>Enter the duration (in minutes)</Form.Text>  
                </Form.Group>

                <Button
                    type='submit'
                    variant="primary"
                    size='lg'
                > Add
                </Button>
            </Form>

            <Projects personalProjects = {personalProjects} workProjects={workProjects} />
        </div>
    );
}
export default LoggerForm;