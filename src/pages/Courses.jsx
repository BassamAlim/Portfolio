import CoursesGrid from '../components/courses/CoursesGrid';
import {CoursesProvider} from '../context/CoursesContext';

const Courses = () => {
    return (
        <CoursesProvider>
            <div className="container mx-auto">
                <CoursesGrid/>
            </div>
        </CoursesProvider>
    );
};

export default Courses;