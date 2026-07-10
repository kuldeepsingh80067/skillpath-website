import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "React JS Complete Bootcamp",
    instructor: "Kuldeep Singh",
    rating: 4.8,
    students: "12,540",
    duration: "32 Hours",
    progress: "0%",
    price: "₹999"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    instructor: "John Smith",
    rating: 4.9,
    students: "21,430",
    duration: "48 Hours",
    progress: "25%",
    price: "₹1499"
  },
  {
    id: 3,
    title: "Python for Beginners",
    instructor: "David Lee",
    rating: 4.7,
    students: "18,200",
    duration: "28 Hours",
    progress: "60%",
    price: "₹799"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    instructor: "Sarah Wilson",
    rating: 4.9,
    students: "9,800",
    duration: "55 Hours",
    progress: "10%",
    price: "₹1999"
  }
];

function Courses() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Courses
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px"
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)"
            }}
          >
            <h2>{course.title}</h2>

            <p>
              <b>Instructor:</b> {course.instructor}
            </p>

            <p>⭐ {course.rating}</p>

            <p>👨‍🎓 {course.students} Students</p>

            <p>⏰ {course.duration}</p>

            <p>📈 Progress: {course.progress}</p>

            <h3>{course.price}</h3>

            <Link to="/signin">
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Enroll Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;