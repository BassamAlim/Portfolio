import {AnimatePresence} from 'framer-motion';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutMe'));
const Skills = lazy(() => import('./pages/Skills'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseSingle = lazy(() => import('./pages/CourseSingle.jsx'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const Experience = lazy(() => import('./pages/Experience.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
    return (
        <AnimatePresence>
            <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                <Router>
                    <ScrollToTop/>
                    <AppHeader/>
                    <Suspense fallback={""}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>

                            <Route path="about" element={<About/>}/>

                            <Route path="skills" element={<Skills/>}/>

                            <Route path="courses" element={<Courses/>}/>

                            <Route path="courses/single-course/:id" element={<CourseSingle/>}/>

                            <Route path="projects" element={<Projects/>}/>

                            <Route path="projects/single-project/:id" element={<ProjectSingle/>}/>

                            <Route path="experience" element={<Experience/>}/>

                            <Route path="contact" element={<Contact/>}/>
                        </Routes>
                    </Suspense>
                    <AppFooter/>
                </Router>
                <UseScrollToTop/>
            </div>
        </AnimatePresence>
    );
}

export default App;