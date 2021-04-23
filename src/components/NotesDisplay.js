// const Note = (props)=>{
//   console.log(props);
//   const {parts} = props;
//   return(
//     <div>
//     {
//       parts.map(part=>
//         <h5>{part.name}:{part.exercises}</h5>
//       )
//     }</div>
//   )
// }

const Notes = (props)=>{
  const notes  = props.props;
  // console.log();
  const total =   notes.parts.reduce((total,currentValue)=>
   total+currentValue.exercises
  ,0);
  console.log(total);
  return(
   <div>
     <h1>{notes.name}</h1>
     {
        notes.parts.map(
          (note)=>
          <h5 key={note.id}>{note.name} {note.exercises}</h5>
        )
     }
    <h3>total of {total} exercises</h3>
   </div>
  )
}
export default Notes;