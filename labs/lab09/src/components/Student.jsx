// Student: functional component that receives data through props
function Student({ studentId, name, college }) {
  return (
    <div>
      <h3>{studentId}</h3>
      <h3>{name}</h3>
      <p>{college}</p>
    </div>
  )
}

export default Student
