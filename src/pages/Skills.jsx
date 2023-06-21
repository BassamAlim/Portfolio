import Skill from "../components/skills/SkillView";
import Skills from "../data/skills";

const SkillsScreen = () => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 mx-16 sm:mx-44"
        >
            {
                Skills.map((skill) => (
                    <Skill skillData={skill}/>
                ))
            }
        </div>
    );
};

export default SkillsScreen;