import Skill from "../components/skills/SkillView";
import skills from "../data/skills";

const Courses = () => {
    return (
        <div
            className="grid grid-cols-2"
            style={{marginRight: '10em', marginLeft: '10em'}}
        >
            {
                skills.map((skill) => (
                    <Skill skillName={skill.name} icon={skill.icon}/>
                ))
            }
        </div>
    );
};

export default Courses;