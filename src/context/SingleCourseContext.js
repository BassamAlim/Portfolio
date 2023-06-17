import {createContext, useState} from 'react';
import {singleCourseData as singleCourseDataJson} from '../data/singleCourseData';

const SingleCourseContext = createContext();

export const SingleCourseProvider = ({children}) => {
    const [singleCourseData, setSingleCourseData] = useState(
        singleCourseDataJson
    );

    return (
        <SingleCourseContext.Provider
            value={{singleCourseData, setSingleCourseData}}
        >
            {children}
        </SingleCourseContext.Provider>
    );
};

export default SingleCourseContext;