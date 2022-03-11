import React, { useContext, useEffect } from 'react';
import CTextField       from 'src/components/customized/CTextField';
import CPasswordField   from 'src/components/customized/CPasswordField';
import FormContainer    from 'src/components/customized/FormContainer';
import SubmitButton     from 'src/components/customized/SubmitButton';
import FormTitle        from 'src/components/customized/FormTitle';
import CDivider         from 'src/components/customized/CDivider';
import CLink            from 'src/components/customized/CLink';
import FormIcon         from 'src/components/customized/FormIcon';

import AuthContext    from 'src/context/auth/auth.context';
import { useLogin }   from 'src/hooks/auth/useLogin';
import { useRouter }  from 'src/hooks/useRouter';
import { useCustomFormik } from 'src/hooks/useCustomFormik';

const Login = () => {

  const { user } = useContext(AuthContext);
  const { gotoHome, gotoRecover, gotoRegister } = useRouter();
  const [login, { loading }] = useLogin();

  const formik = useCustomFormik({ 
    email: '', 
    password: '' 
  }, login);

  useEffect(() => { user && gotoHome() }, [user])

  return (
    <FormContainer>
      <FormIcon path='/svg/login.svg'/>
      <FormTitle text='ingresar'/>
      <form onSubmit={formik.handleSubmit}>
        <CTextField 
          name='email'
          label="Correo electrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorText={formik.errors.email}
        />
        <CPasswordField 
          name='password'
          label="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          errorText={formik.errors.password}
        />
        <SubmitButton text='ingresar' disabled={loading}/>
      </form>
      <CDivider height={12}/>
      <CLink 
        onClick={gotoRecover}
        text='He olvidado mi contraseña'
      />
      <CLink 
        onClick={gotoHome}
        text='Ir a la página principal'
      />
      <CLink 
        onClick={gotoRegister}
        text='Crear una cuenta'
      />
    </FormContainer>
  )
}

export default Login;
