import React, { useContext, useEffect } from 'react';
import { Grid } from '@mui/material';
import CTextField       from 'src/components/customized/CTextField';
import CPasswordField   from 'src/components/customized/CPasswordField';
import FormContainer    from 'src/components/customized/FormContainer';
import SubmitButton     from 'src/components/customized/SubmitButton';
import FormTitle        from 'src/components/customized/FormTitle';
import CDivider         from 'src/components/customized/CDivider';
import CLink            from 'src/components/customized/CLink';
import FormIcon         from 'src/components/customized/FormIcon';
import AuthContext      from 'src/context/auth/auth.context';
import { useRegister }  from 'src/hooks/auth/useRegister';
import { useCustomFormik } from 'src/hooks/useCustomFormik';
import { useRouter } from 'src/hooks/useRouter';

const Register = () => {

  const { user } = useContext(AuthContext);
  const { gotoHome, gotoLogin } = useRouter();
  const [register, { loading }] = useRegister();

  const formik = useCustomFormik({
    name: '',
    email: '',
    lastname: '',
    password: ''
  }, register);

  useEffect(() => { if( user ) gotoHome() }, [user])

  return (
    <FormContainer>
      <FormIcon path='/svg/register.svg'/>
      <FormTitle text='crear cuenta'/>
      <form onSubmit={formik.handleSubmit}>
        <CTextField 
          name='name'
          label="Nombres"
          value={formik.values.name}
          onChange={formik.handleChange}
          errorText={formik.errors.name}
        />
        <CTextField 
          name='lastname'
          label="Apellidos"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          errorText={formik.errors.lastname}
        />
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
        <SubmitButton 
          text='registrar'
          disabled={loading}
        />        
      </form>
      <CDivider height={12}/>
      <CLink 
        onClick={gotoHome}
        text='Ir a la página principal'
      />
      <CLink 
        onClick={gotoLogin}
        text='Ya tengo una cuenta'
      />
    </FormContainer>
  )
}

export default Register;