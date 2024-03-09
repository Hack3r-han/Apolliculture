import Login  from '../components/login/Login'

const Loginregister = () => {
  return (
    <div className=' text-black h-[100-vh] flex justify-center items-center bg-cover' style={{"background": "url( ../src/assets/images/BgLogin.svg)"}}>
      <Login/>
    </div>
  )
}

export default Loginregister;