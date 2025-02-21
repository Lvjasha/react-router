import { Link, useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';
import { useState, useEffect } from 'react';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    return sortedCourses;
}

const Courses = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const navigate = useNavigate();
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    );

    console.log(sortCourses(courses, sortKey));

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate('.');
            setSortKey();
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigate]);

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>

            <div class="dropdown">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a class="dropdown-item" href="#">
                            Id
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Title
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Slug
                        </a>
                    </li>
                </ul>
            </div>
            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <Link to={course.slug} className="courseLink">
                        {course.title}
                    </Link>
                </div>
            ))}
            <br />
        </>
    );
};

export default Courses;
