export const UserInfoDashbord = ({user}) =>{
    return(
        <div>
            <h1>{user.name}</h1>
            <p>{user.course_module}</p>
        </div>
    )
}