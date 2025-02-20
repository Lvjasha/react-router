import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<h1>React Router</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/contacts" element={<h1>Contacts</h1>} />
                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
