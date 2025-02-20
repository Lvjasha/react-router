import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import courses from '../data/courses';
import { useEffect } from 'react';

const SingleCourse = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const course = courses.find((course) => course.slug === params.slug);

    useEffect(() => {
        if (!course) {
            navigate('..', { relative: 'path' });
        }
    }, [course, navigate]);

    // if (!course) {
    //     return <NotFound />;
    // }

    return (
        <>
            <h1>It is {course?.title}</h1>
            <h3>{course?.id}</h3>
            <h3>{course?.slug}</h3>
            <Link to=".." relative="path">
                All courses
            </Link>
        </>
    );
};

export default SingleCourse;
