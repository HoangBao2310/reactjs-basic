import React from 'react';

class AddComponent extends React.Component {
    state = {
        nameJob : '',
        salary : '',
        
    }
    handleNameJob = (event) => {
        this.setState({
            nameJob: event.target.value
        })
    }
    handleSalary = (event) => { 
        this.setState({
            salary: event.target.value
        })
    }
    formClickSubmit = (event) => {
        event.preventDefault();
        if(!this.state.nameJob || !this.state.salary){
            alert("Missing required params");
            return;
        }
        // console.log('data submit >> ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            job: this.state.nameJob,
            salary: this.state.salary
        })
        this.setState({
            nameJob: '',
            salary:'',
        })
        alert("Submit Done !!") 
    }
    render() {
        return (
            <>
                <form>
                    <input placeholder='Name Job' type='text' value={this.state.nameJob} onChange={(event) => this.handleNameJob(event)}></input>
                    <br></br>
                    <input placeholder='Salary' type='text' value={this.state.salary} onChange={(event) => this.handleSalary(event)}></input>
                    <br></br>
                    <input type='submit' onClick={(event) => this.formClickSubmit(event)}></input>
                </form>
            </>
        )
    }


}
export default AddComponent