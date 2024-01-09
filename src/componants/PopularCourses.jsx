import React from 'react';

const courses = [
  {
    title: 'Introduction to Programming',
    instructor: 'John Doe',
    image: 'https://imageio.forbes.com/specials-images/imageserve/6478ac8cabb4597cca0e1090/Equifax-Exploit/960x0.jpg?height=531&width=711&fit=bounds', // Replace with actual image URL
    price: '$49.99',
  },
  {
    title: 'Web Development Basics',
    instructor: 'Jane Doe',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXzvOScmDBIEf7woQAz5m_RvWdSnV-oj_Y63M8-Aq8XpIjYWuQULQ_3NfBFw4u4nVYmc&usqp=CAU', // Replace with actual image URL
    price: '$29.99',
  },
  {
    title: 'Data Science Fundamentals',
    instructor: 'Alice Smith',
    image: 'https://c8.alamy.com/comp/2C4DNBF/finger-touching-tablet-with-web-technology-icons-and-data-science-inscription-web-technology-concept-2C4DNBF.jpg', // Replace with actual image URL
    price: '$59.99',
  },
  {
    title: 'Graphic Design Mastery',
    instructor: 'Bob Johnson',
    image: 'https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais', // Replace with actual image URL
    price: '$39.99',
  },
  
];

const PopularCourses = () => {
  return (
    <section className="bg-gray-100 font-Poppins py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
              <p className="text-lg font-semibold text-blue-500 mb-2">{course.price}</p>
              <button class="relative  inline-flex items-center justify-center p-0.5 mb-8 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Enroll Now
    </span>
    </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
