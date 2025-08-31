import { ThemeContext } from './DarkLight';
import { LoginForm } from './Login';
import { Form } from './Form';
import { use } from 'react';
export const Home = () => {
    const { theme, handleToggletheme } = use(ThemeContext);
    return <>
        <div className="App">
            <button onClick={handleToggletheme}>{theme === 'dark' ? 'BG  White' : 'BG Black'}</button>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', background: `${theme == 'dark' ? 'black' : 'white'}` }}>
                <Form></Form>
                <LoginForm></LoginForm>
            </div>
        </div>
    </>
}
