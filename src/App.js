import { BrowserRouter, Routes, Rout } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Rout element={<h1>React Router</h1>}></Rout>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
