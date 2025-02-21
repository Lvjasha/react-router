import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import './App.css';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="courses" element={<Courses />} />
                        <Route path="courses" element={<MainLayout />} />
                        <Route
                            path="courses/:slug"
                            element={<SingleCourse />}
                        />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
