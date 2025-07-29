import logo from './logo.svg';
import './App.css';
import { Form } from './Form/Form';
import { LoginForm } from './Form/Login';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Form></Form>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default App;
