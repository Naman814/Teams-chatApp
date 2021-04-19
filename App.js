import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
            <ChatEngine
                height="100vh"
                projectID="182e94f7-f2f1-41da-b9a5-e72bc5762b67"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 

                />
            
    );
            
}

export default App;