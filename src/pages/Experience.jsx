import {Experience as ExperienceData} from '../data/experience';
import ExperienceCard from "../components/experience/ExperienceCard";

const Experience = () => {
    return (
        <div className="container mx-auto my-16 space-y-8">
            {
                ExperienceData.map((experience_item) => (
                    <ExperienceCard data={experience_item}/>
                ))
            }
        </div>
    );
};

export default Experience;