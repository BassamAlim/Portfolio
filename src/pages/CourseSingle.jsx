import SubCourses from '../components/courses/SubCourses';
import {motion} from 'framer-motion';
import {SingleCourseProvider} from "../context/SingleCourseContext";
import CourseHeader from "../components/courses/CourseHeader";
import CourseCertView from "../components/courses/CourseCertView";
import { useParams } from 'react-router-dom';

const CourseSingle = () => {
    const { id } = useParams();

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
                <CourseHeader id={id}/>
                <CourseCertView id={id}/>
                {!id.includes('.') && <SubCourses id={id}/>}
            </SingleCourseProvider>
        </motion.div>
    );
};

export default CourseSingle;