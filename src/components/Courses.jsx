import { Link } from 'react-router-dom';
import SingleCourse from './SingleCourse';
const Courses = () => {
    return (
        <>
            <h1>Courses</h1>
            <br />
            <Link to="react">Go to react</Link>
            <br />
            <Link to="javascript">Go to javascript</Link>
            <br />
            <Link to="piton">Go to piton</Link>
        </>
    );
};

export default Courses;
