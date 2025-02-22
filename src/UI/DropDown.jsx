import styles from './DropDown.module.css';
const DropDown = (props) => {
    const { sortCourses, setSortKey, courses } = props;

    //

    return (
        <>
            <select
                className={styles.form}
                onChange={(e) =>
                    sortCourses(courses, setSortKey(e.target.value))
                }
            >
                <option defaultValue>Filter</option>
                <option value="title">Filter by title</option>
                <option value="id">Filter by id</option>
            </select>
        </>
    );
};

export default DropDown;
