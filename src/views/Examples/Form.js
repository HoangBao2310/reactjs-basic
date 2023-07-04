import React from 'react';
import ChildComponent from './ChildComponent';

class Form extends React.Component {
    state = {
        firstName : '',
        lastName : '',
        arrJobs: [
            { id: 'abcJob1', job: 'Developers', salary: '500 $' },
            { id: 'abcJob2', job: 'Testers', salary: '400 $' },
            { id: 'abcJob3', job: 'Project managers', salary: '1000 $' }
        ]
    }
    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    formClickSubmit = (event) => {
        event.preventDefault();
        
        alert("Submit Done !!")
    }
    render(){
        return(
            <>
                 <form>
                    <input placeholder='First Name' type='text' value={this.state.firstName} onChange={(event) => this.handleFirstName(event)}></input>
                    <br></br>
                    <input placeholder='Last Name' type='text' value={this.state.lastName} onChange={(event) => this.handleLastName(event)}></input>
                    <br></br>
                    <input type='submit' onClick={(event) => this.formClickSubmit(event)}></input>
                 </form>
                <ChildComponent name={'First'} age={'25'} ></ChildComponent>
                <ChildComponent name={'Second' } age={'30'}></ChildComponent>
                <ChildComponent name={this.state.firstName} age={'55'}></ChildComponent>
                <ChildComponent arrJobs={this.state.arrJobs}></ChildComponent>
            </>
        )
       
    }
}
export default Form