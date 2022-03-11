import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "src/context/auth/auth.context";


export const useRouter = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const back  = () => { navigate(-1) }

  const gotoLanding   = () => { navigate('/') } 
  const gotoHome      = () => { navigate('/home') }

  const gotoLogin     = () => { if(!user) navigate('/auth/login') }
  const gotoRecover   = () => { if(!user) navigate('/auth/recover') } 
  const gotoRegister  = () => { if(!user) navigate('/auth/register') }

  return {
    back,
    
    gotoLanding,
    gotoHome,

    gotoLogin,
    gotoRecover,
    gotoRegister
  }
}