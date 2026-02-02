import React, { Component } from 'react'; 
import CourseCard from './CourseCard';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        { name: "Data Structure and Algorithms", duration: "40hrs", price: "RS100", img: "5.jpg" },
        { name: "Java Programming", duration: "30hrs", price: "RS80", img: "6.png" },
        { name: "React JS", duration: "40hrs", price: "RS120", img: "7.png" },
        { name: "Machine Learning", duration: "35hrs", price: "RS200", img: "8.jpg" },
      ]
    };
  }

  render() {
   
    const { courses } = this.state;

    return (
      <div className='app'>
        <div className='header'>Course Catalog - 2500030961 - Manya Singh</div>
        
        <div className='Section'>
          {courses.map((course, index) => (
            
            <CourseCard key={index} data={course} />
          ))}
        </div>

        <div className='footer'>
          © Copyright @ 2026. All rights reserved. - Manya Singh
        </div>
      </div>
    );
  }
}