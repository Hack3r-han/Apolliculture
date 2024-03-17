import Login   from '../components/login/Login'

const LoginPage = () => {
  return (
    <div className=' text-black h-[100-vh] flex justify-center items-center bg-cover' style={{"background": "url( ../src/assets/images/BgLogin.svg)",backgroundSize: "cover"}}>
      <Login/>
    </div>
  )
}

export default LoginPage;