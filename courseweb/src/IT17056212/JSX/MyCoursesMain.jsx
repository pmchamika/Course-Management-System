import React, {Component} from 'react';

import ImageSlide from "../../IT17152938/JSX/ImageSlide";

import Navbarjsx from "../../IT17152938/JSX/Navbarjsx";
import Footer from "../../IT17152938/JSX/Footer";
import MyCourses from "./MyCourses";

export default class MyCoursesMain extends Component {
    render() {
        return (
            <div>
                <Navbarjsx/>

                <MyCourses/>
                <Footer/>
            </div>
        );
    }


}