
import {useState, usestate} from 'react'

const Profile = () => {

const [profile, setProfile] = useState({
    name:'',
    age:'',
})

const handlechange =(e)=>{
  
  e.preventDefault();
    const {name , value} =e.target;



  setProfile((preProfile)=>({
    ...preProfile,[name]:value,
 } ))
}

  return (
    <div>
        <h2> User Profile </h2 >
            <div>
                <label >Name:
                    <input type="text"  name ="name" value={profile.name} onChange={handlechange}/>
                </label>
            </div>
            <div>
        <label >Age:
            <input type="number" name = "age" value={profile.age} onChange={handlechange} />
        </label>
        </div>

        <h3>
            Profile Information
        </h3>
        <p>Name:{profile.name} </p>
        <p>Age:{profile.age}</p>
    </div>
  )
}

export default Profile