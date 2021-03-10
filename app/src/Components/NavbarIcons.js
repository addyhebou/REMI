import React from 'react'
import Clipboard from '../Components/Clipboard'
import ShuffleCards from '../Components/ShuffleCards'
import '../App.scss';
import { Link } from "react-router-dom";

export default function NavbarIcons() {
    return (
        <div className = "NavbarIcons">
            <div class = "navIcons"></div>
            <div class = "navTitle">
                <h1>2021<strong>Goals</strong></h1>
            </div>
            <div class = "navIcons">
                <Link to = {{pathname: "/weeklyList"}}>
                    <Clipboard />
                </Link>
                <Link to = {{pathname: "/shuffleTasks"}}>
                    <ShuffleCards />
                </Link>
            </div>
        </div>
    )
}