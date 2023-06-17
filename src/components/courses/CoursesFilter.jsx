const selectOptions = [
    'Data Science',
    'Machine Learning',
    'Programming'
];

const CoursesFilter = ({setSelectCourse}) => {
    return (
        <select
            onChange={(e) => {
                setSelectCourse(e.target.value);
            }}
            className="font-general-medium
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
        >
            <option value={setSelectCourse} className="text-sm sm:text-md">
                All Courses
            </option>

            {selectOptions.map((option) => (
                <option className="text-normal sm:text-md" key={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default CoursesFilter;
