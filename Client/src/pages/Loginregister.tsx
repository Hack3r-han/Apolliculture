import React, { useState, useEffect } from 'react';
import Login  from '../components/login/Login'

const Loginregister: React.FC = () => {
  const [loginregister, setLoginregister] = useState<any[]>([]);

  useEffect(() => {
    const fetchLoginregister = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/users');
        if ( response.ok ) {
          const data = await response.json();
          setLoginregister(data);
        }else{
          console.log('error')
        }
      } catch (error) {
        console.log(error)
        
      }
    };

    fetchLoginregister();
  }, [] );

  return (
    <div className=' text-black h-[100-vh] flex justify-center items-center bg-cover' style={{"background": "url( ../src/assets/images/BgLogin.svg)",backgroundSize: "cover"}}>
      {loginregister.map((user) => (
        <Login
        key={user.id} 
        id={user.id}
        username={user.username}
        password={user.password}
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
        admin={user.admin} />
      ))}
      
    </div>
  )
}

export default Loginregister;