import Register from '../components/register/Register'

const RegisterPage = () => {
  return (
    <div className=' text-black h-[100-vh] flex justify-center items-center bg-cover' style={{"background": "url( ../src/assets/images/BgLogin.svg)",backgroundSize: "cover"}}>
      <Register/>
    </div>
  )
}

export default RegisterPage;