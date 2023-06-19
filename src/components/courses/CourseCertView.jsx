import Courses from '../../data/courses';

function CourseCertView({id}) {
    const data = Courses.find((course) => course.id.toString() === id)

    return (
        <div className="text-left">
            {
                data.certificates.length > 1 ?  // bug here when using .map for all cases
                    data.certificates.map((certificate) => (
                        <img
                            src={certificate}
                            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none mt-8"
                            alt={data.title}
                            key={data.id}
                        />
                    ))
                    : <img
                        src={data.certificates[0]}
                        className="rounded-xl cursor-pointer shadow-lg sm:shadow-none mt-8"
                        alt={data.title}
                        key={data.id}
                    />
            }
        </div>
    );
}

export default CourseCertView;