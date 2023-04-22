import React from 'react'
import PropTypes, { string } from'prop-types'

const style ={
  border: 'solid 1px blue',
  padding: '10px',
  fontSize: '20px',
  margin: '50px',
  cursor: 'pointer',
}
const HandelName=(props)=>{
  return(
<>
      <button style={style} onClick={props.alert}>click here</button>
</>  
)
}

const Profile0 = ({tag,fullName0,fullName, bio, profession}) => {
  const fun=()=>{
    alert('hello my name is ' +`${fullName0}`)
  }
  return (
    <div>
    <h1>{fullName0}</h1>
    <h2>{bio}</h2>
    <h1>{profession} </h1>
    <HandelName  alert={fun} />
    <img src="/astronaut.png" alt="" />
    </div>
  )
}
//checking with proptypes
// Profile0.PropTypes={
// name0:proptypes.string
// }
export default Profile0