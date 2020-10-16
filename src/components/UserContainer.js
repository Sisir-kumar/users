import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../redux/user/userAction'
import './UserContainer.css'
function UserContainer(props) {
    const {usersdata,userfetch}=props
    const id=props.match.params.id
 useEffect(()=>{
    userfetch(id)
 },[])

    return usersdata.loading ?(
      <img className="loading" src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading" />
    ):(
        <div className="container">
            <div class="card" >
                <img class="card-img-top" src={usersdata.user.avatar} alt="Card image" />
                <div class="card-body">
                    <h4 class="card-title">Name :{usersdata.user.first_name} {usersdata.user.last_name} </h4>
                    <p class="card-text">Email :{usersdata.user.email}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
      usersdata:state.users
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
      userfetch:(id) =>dispatch(fetchUser(id))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) ( UserContainer)
