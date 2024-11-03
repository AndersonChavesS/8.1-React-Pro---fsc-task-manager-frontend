import { useNavigate } from 'react-router-dom'
import CustomButtom from '../components/CustomButton'

import './Login.scss'
import logo from '../assets/images/logo-2.png'

const Login = () => {
    const navigate = useNavigate()

    const handleSignInClick = () => {
        navigate('/')
    }

    return (
        <div className="login-container">
            {' '}
            <img src={logo} alt="Full Stack Club" />
            <div className="button-container">
                <CustomButtom onClick={handleSignInClick}>Entrar</CustomButtom>
            </div>
        </div>
    )
}

export default Login
