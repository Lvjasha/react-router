import { Link } from 'react-router-dom';
import SingleCourse from './SingleCourse';
import courses from '../data/courses';

const Courses = () => {
    return (
        <>
            <h1>Courses</h1>
            <div key={courses.id}>
                {courses.map((course) => (
                    <Link className="courseLink" to={course.slug}>
                        {course.title}
                    </Link>
                ))}
                <br />
            </div>
        </>
    );
};

export default Courses;
