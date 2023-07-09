import logo from '../assets/images/logo.png';
// import  MyComponent  from './Examples/MyComponent.js';
// import Form from './Examples/Form';
import './App.scss';
import ListTodo from './Todo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <MyComponent></MyComponent>
        <Form></Form> */}
        {<ListTodo></ListTodo>}
      </header>
      <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
    </div>
  );
}

export default App;
