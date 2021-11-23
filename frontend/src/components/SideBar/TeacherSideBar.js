import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

const TeacherSideBar = () => {
    return (
        <header class="sidebar-header" role="banner">
            <h1 class="logo">
                <a>Hello <span>TEACHER</span></a>
            </h1>
            <div class="nav-wrap">
                <nav class="main-nav" role="navigation">
                    <ul class="unstyled list-hover-slide">
                        <li><Link to="/teacher/dashboard"><a>DASHBOARD</a></Link></li>
                        <li><Link to="/teacher/profile"><a>PROFILE</a></Link></li>
                        <li><Link to="/teacher/courses"><a>VIEW COURSES</a></Link></li>
                        <li><Link to="/teacher/help"><a>HELP</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default TeacherSideBar