import { Link, useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';
import { useState, useEffect } from 'react';
import DropDown from '../UI/DropDown';
//import SortCourses from './SortCourses';

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
    // возвращает полный путь (без домена),
    // содержит уникальный ключ для кеширования страницы, параметры поиска
    const location = useLocation();
    // перекидывает на другую страницу, должна вызываться внутри useEffect
    const navigate = useNavigate();
    //ищет в строке запрос
    const query = queryString.parse(location.search);
    //Значение ссылки
    const [sortKey, setSortKey] = useState(query.sort);
    //объект со всеми отсортированными курсами
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    );
    console.log(query);
    //console.log(sortCourses(courses, sortKey));
    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate('.');
            setSortKey();
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigate]);

    useEffect(() => {
        setSortedCourses(sortCourses(courses, sortKey));
    }, [...courses, sortKey]);

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
            <DropDown
                courses={courses}
                sortCourses={sortCourses}
                setSortKey={setSortKey}
            />

            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <Link to={course.slug} className="courseLink">
                        {course.title}
                    </Link>
                </div>
            ))}
            <br />

            {/* <SortCourses setSortedCourses={setSortedCourses} /> */}
        </>
    );
};

export default Courses;
