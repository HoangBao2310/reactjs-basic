import React from "react";
import AddWork from "./AddWork";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        todoList: [
            { id: '001', work: 'Playing game' },
            { id: '002', work: 'Do homework' },
            { id: '003', work: 'Cooking' }
        ],
        editTodo: {}
    }

    // ADD TODO
    addTodo = (work) => {
        let currentWork = this.state.todoList
        currentWork.push(work)
        this.setState({
            todoList: currentWork
        })
        toast.success("Add completed !!")
    }

    // DELETE TODO
    deleteTodo = (todo) => {
        let currentWorks = this.state.todoList
        currentWorks = currentWorks.filter(item => item.id !== todo.id)
        this.setState({
            todoList: currentWorks
        })
        toast.success("Delete completed !!")
    }

    // EDIT TODO
    handleEditTodo = (todo) => {
        let { todoList, editTodo } = this.state
        let isEmptyOjb = Object.keys(editTodo).length === 0
        //save
        if (isEmptyOjb === false && todo.id === editTodo.id) {
            let todoListCopy = [...todoList];
            let ojbIndex = todoListCopy.findIndex(item => item.id === todo.id)
            todoListCopy[ojbIndex].work = editTodo.work
            this.setState({
                todoList: todoListCopy,
                editTodo: {}
            })
            toast.success('Edit succes !!')
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    // handleEditTodo = (todo) => {
    //     let { editTodo, listTodos } = this.state;

    //     let isEmptyObj = Object.keys(editTodo).length === 0;

    //     //save
    //     if (isEmptyObj === false && editTodo.id === todo.id) {

    //         let listTodosCopy = [...listTodos];

    //         let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

    //         listTodosCopy[objIndex].title = editTodo.title;

    //         this.setState({
    //             listTodos: listTodosCopy,
    //             editTodo: {}
    //         })
    //         toast.success("Update todo succeed!")
    //         return;
    //     }

    //     //edit
    //     this.setState({
    //         editTodo: todo
    //     })


    // }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.work = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { todoList, editTodo } = this.state
        let isEmptyOjb = Object.keys(editTodo).length === 0
        // console.log(">>> check empty : ", isEmptyOjb)

        const renderWork = (work) => {
            return work.map((item, index) => {
                return (
                    <>
                        <li className="todo-item" key={item.id}>
                            {
                                isEmptyOjb === true ?
                                    <span>No{index + 1}: {item.work}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>No{index + 1}: <input value={editTodo.work} onChange={(event) => this.handleOnchangeEditTodo(event)} /> </span>
                                            :
                                            <span>No{index + 1}: {item.work}</span>
                                        }
                                    </>
                            }

                            <button onClick={() => this.handleEditTodo(item)}>
                                {isEmptyOjb === false ?

                                    <i class="fa-solid fa-check"></i>

                                    :
                                    <i class="fa-solid fa-pencil"></i>
                                }

                            </button>
                            <button onClick={() => this.deleteTodo(item)}><i class="fa-solid fa-trash-can"></i></button>
                        </li >
                    </>
                )
            })

        }
        return (
            <>

                <div className="todo-container">
                    <AddWork addTodo={this.addTodo}></AddWork>
                    <div className="todo-content">
                        <ul className="todo-box">
                            {todoList ? renderWork(todoList) : ""}
                        </ul>
                    </div>
                </div>

            </>
        )
    }
}
export default ListTodo