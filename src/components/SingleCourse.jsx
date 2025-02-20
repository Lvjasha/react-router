import courses from '../data/courses';

const SingleCourse = () => {
    return (
        <>
            {courses.filter((el) => {
                return <SingleCourse key={el.slug} />;
            })}
        </>
    );
};

export default SingleCourse;
