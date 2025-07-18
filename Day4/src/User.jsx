
// jsx using props
/*
  <User>
      <div>Mohit decosla</div>
      </User>

*/
function User({children}){
  return(
    <div>
        <h1>user : {children}</h1>

    </div>
  )
}
export default User