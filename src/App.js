import './App.css';
import Users from "./components/Users";
import User from "./components/User";
import Post from "./components/Post";
import {Route, Routes} from 'react-router';
import Modal from "./components/Modal";
import {useState} from "react";


const App = () => {
    const [modalState, setModalState] = useState({visible: false, type: ''});
    const showModal = (id) => {
        setModalState({visible: true, type: id})
    }
    const onConfirm = () => {
        setModalState({visible: false, type: modalState.type});
    };

    const createPost = (title, text) => {

    }


  return (
    <div className="App">
        <Modal visible={modalState.visible} type={modalState.type}  onConfirm={onConfirm} />
        <Routes>
            <Route strict exact path='/' element={<Users />} />
            <Route strict exact path='/:id' element={<User showModal={showModal} />} />
            <Route strict exact path='/:id/:id' element={<Post showModal={showModal} />} />
        </Routes>

    </div>
  );
}

export default App;
