import{useNavigate} from'react-router-dom'

const Login = () => {

const navigate = useNavigate();
const handleclick = () =>{
  navigate('/Home')
}

  return (
    <>
    <h1> Login</h1>
    <button onClick={handleclick}> connexion </button>
    </>
    
  )
}

export default Login