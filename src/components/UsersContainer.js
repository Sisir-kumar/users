import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import {  fetchUsers } from '../redux'
import {Link} from 'react-router-dom'
import './UsersContainer.css'

function UsersContainer ({ userData, fetchUsers }) {

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('id');
  useEffect(() => {
    fetchUsers()
    const sortArray = key => {
      console.log(key)
      
    const  compareBy = (key) => { 
        return function(a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      };
    const sortProprty = [...userData.users]
    const sorted=sortProprty.sort(compareBy(key))
      setData(sorted)
    console.log(sorted)
    } 
    sortArray(sortType);

  }, [sortType])
  return userData.loading ?(
    <img className="loading" src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif" alt="loading" />
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div className="container">
       <div className="header">
       <h3 className="user_name">Users List</h3>
         <select className="selectpicker" value={sortType} onChange={(e) => setSortType(e.target.value)} >
                <option value="id" selected>None</option>
                <option value="first_name" >First Name</option>
                <option value="last_name">Last Name</option>
          </select>
       </div>
      <div className="card-columns">
      {data.map(user => (
          <div className="card"  >
            <Link to={`/${user.id}`}>
            <img src={user.avatar} className="img-fluid" key={user.id} />
            <div className="card-body">
                <h4 className="card-title" key={user.id}> {user.first_name}  {user.last_name} </h4>
            </div>
            </Link>
          </div>
  ))}
      </div> 
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.allusers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect( mapStateToProps, mapDispatchToProps) (UsersContainer)
