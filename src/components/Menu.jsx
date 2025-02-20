import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Переключатель навигации"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link
                                to="."
                                class="nav-link active"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="courses">
                                Courses
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="contacts">
                                Contacts
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
