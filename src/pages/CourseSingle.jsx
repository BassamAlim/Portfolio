import CourseInfo from '../components/courses/CourseInfo';
import CourseRelatedCourses from '../components/courses/CourseRelatedCourses';
import {motion} from 'framer-motion';
import {SingleCourseProvider} from "../context/SingleCourseContext";
import CourseHeader from "../components/courses/CourseHeader";
import CourseGallery from "../components/courses/CourseGallery";

const CourseSingle = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, delay: 1}}
            transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.15,
            }}
            className="container mx-auto mt-5 sm:mt-10"
        >
            <SingleCourseProvider>
                <CourseHeader/>
                <CourseGallery/>
                <CourseInfo/>
                <CourseRelatedCourses/>
            </SingleCourseProvider>
        </motion.div>
    );
};

export default CourseSingle;