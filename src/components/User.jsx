function User(props) {
    // console.log('USER PORPOS======', props)
    return(<div>
        <span className="user">
        <span className="name"> {props.userData.name} </span>
        <span className="handle">{props.userData.handle}</span>
        </span>
    </div>)
}

export default User;