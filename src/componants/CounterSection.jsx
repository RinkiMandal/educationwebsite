import React, { useState, useEffect } from 'react';

const CounterSection = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [instructorsCount, setInstructorsCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     
      if (coursesCount < 100) {
        setCoursesCount((prevCount) => prevCount + 1);
      }
      if (studentsCount < 1000) {
        setStudentsCount((prevCount) => prevCount + 1);
      }
      if (instructorsCount < 200) {
        setInstructorsCount((prevCount) => prevCount + 1);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [coursesCount, studentsCount, instructorsCount]);

  return (
    <section className=" bg-gray-100 font-Poppins  py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Counter Card - Courses */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-blue-500">{coursesCount + "k"}</p>
            <h3 className="text-2xl font-bold mb-4">Courses</h3>
          </div>

          {/* Counter Card - Students */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-green-500">{studentsCount + "k"}</p>
            <h3 className="text-2xl font-bold mb-4">Students</h3>
          </div>

          {/* Counter Card - Instructors */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-4xl font-bold text-yellow-500">{instructorsCount + "k"}</p>
            <h3 className="text-2xl font-bold mb-4">Instructors</h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
