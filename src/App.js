import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const App=()=>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
        height="100vh"
        projectID="2d0c43db-738e-46c8-b6de-7287f838733c"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // 👇 this is a prop through which you can render your own component for the entire chatFeed
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // spread all the pros comming from the   👆 chat engine

        />
    );

}
export default App;
