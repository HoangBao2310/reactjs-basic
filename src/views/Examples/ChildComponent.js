import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleClickShowJob = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleOnclickDelete = (job) => {
        this.props.deleteAJob(job)
    
    }
    render() {

        // let name = this.props.name
        // let age = this.props.age
        let { arrJobs } = this.props    
        let { showJob } = this.state

        const renderJobs = (jobs) => {
            return jobs.map((item, index) => {
                if (item.salary >= 500) {
                    return (
                        <div key={item.id} className='item-job'>
                            <p>Công việc: {item.job} -- Lương: {item.salary} $</p> <button onClick={()=>this.handleOnclickDelete(item)}>x</button>
                        </div>
                    )
                }
            })
        }
        return (
            <>
              
                {showJob === false ?
                    <button onClick={() => this.handleClickShowJob()}>Show</button>
                    :
                    <>
                        <div className='list-job'> 
                            {arrJobs ? renderJobs(arrJobs) : ""}
                        </div>
                        <button onClick={() => this.handleClickShowJob()}>Hide</button>
                    </>
                }
            </>
        )

    }
}
export default ChildComponent