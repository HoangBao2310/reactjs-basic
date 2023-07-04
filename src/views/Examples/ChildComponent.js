import React from 'react';

class ChildComponent extends React.Component {
    render() {
        // let name = this.props.name
        // let age = this.props.age
        let { name, age, arrJobs } = this.props
        return (
            <>
                {name} Child - Age: {age}<br></br>
                {console.log('prop:', this.props)}
                <div className='list-job'>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id} className='item-job'>
                                    <p>Công việc: {item.job}</p>
                                    <p>Lương: {item.salary}</p>
                                </div>
                            )

                        })
                    }
                </div>
            </>
        )

    }
}
export default ChildComponent