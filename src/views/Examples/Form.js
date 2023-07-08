import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Form extends React.Component {
    state ={
        arrJobs: [
            { id: '232', job: 'Developers', salary: '500' },
            { id: '123', job: 'Testers', salary: '400' },
            { id: '341', job: 'Project managers', salary: '1000' }
        ]
    }
    addNewJob =  (job) =>{
        // cach 1
        // this.setState({
        //     arrJobs: [...this.state.arrJobs, job]
        // })

        // cach 2

        let currentJob = this.state.arrJobs
        currentJob.push(job)
        this.setState({
            arrJobs: currentJob
        })
    }
    deleteAJob = (job) =>{
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item =>  item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    render(){
        return(
            <>
                <AddComponent addNewJob={this.addNewJob}></AddComponent>
                <ChildComponent arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob}></ChildComponent>
            </>
        )
       
    }
}
export default Form