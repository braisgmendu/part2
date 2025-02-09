const Part = ({parts}) =>{
    const initialValue = 0
    const total = parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      initialValue
    );
    return (
      <div>
        {parts.map(part => (
          <p key={part.id}>{part.name} {part.exercises}</p>
        ))}
        <p>Total of {total} exercises</p>
      </div>
    )
  }
  
  const Course = ({courses}) =>{
    return (  
      <div>
        {courses.map((course,i) => (
          <div key={i}>
            <h1>{course.name}</h1>
            <Part parts={course.parts} />
          </div>
        ))}
      </div>
    )
  }

  export default Course;