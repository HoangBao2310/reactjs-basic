import React from "react";
import {  toast } from 'react-toastify';

class AddWork extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    clickAdd = (event) => {
        event.preventDefault();
        if (!this.state.title) {
            toast.error('Missing Title Todo !!')
            return
        }
        this.props.addTodo({
            id: Math.floor(Math.random() * 1001),
            work: this.state.title
        })
        this.setState({
            title: ''
        })
        
    }
    render() {
        let { title } = this.state
        return (
            <>
                <div className="todo-add">
                    <input type="text" placeholder="..." value={title} onChange={(event) => this.handleOnChangeTitle(event)}></input>
                    <button onClick={(event) => this.clickAdd(event)}>Add</button>
                </div>
                
            </>
        )
    }

}
export default AddWork