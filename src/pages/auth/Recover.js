import React, { useContext, useEffect } from 'react';
import CTextField       from 'src/components/customized/CTextField';
import FormContainer    from 'src/components/customized/FormContainer';
import SubmitButton     from 'src/components/customized/SubmitButton';
import FormTitle        from 'src/components/customized/FormTitle';
import CDivider         from 'src/components/customized/CDivider';
import CLink            from 'src/components/customized/CLink';
import FormIcon         from 'src/components/customized/FormIcon';

import AuthContext      from 'src/context/auth/auth.context';

import { useRouter }        from 'src/hooks/useRouter';
import { useRecover }       from 'src/hooks/auth/useRecover';
import { useCustomFormik }  from 'src/hooks/useCustomFormik';

const Recover = () => {

  const { user } = useContext(AuthContext);
  const { gotoHome, gotoLogin, gotoRegister } = useRouter();
  const [recover, { loading }] = useRecover();

  const formik = useCustomFormik({ email: '' }, recover);

  useEffect(() => { if( user ) gotoHome() }, [user])

  return (
    <FormContainer>
      <FormIcon path='/svg/recover.svg'/>
      <FormTitle text='recuperar cuenta'/>
      <form onSubmit={formik.handleSubmit}>
        <CTextField 
          name='email'
          label="Correo electrónico"
          onChange={formik.handleChange}
          value={formik.values.email}
          errorText={formik.errors.email}
          disabled={loading}
        />
        <SubmitButton text='enviar' disabled={loading}/>
      </form>
      <CDivider height={12}/>
      <CLink 
        onClick={gotoHome}
        text='Ir a la página principal'
      />
      <CLink 
        onClick={gotoLogin}
        text='Ir al panel de ingreso'
      />
      <CLink 
        onClick={gotoRegister}
        text='Crear una cuenta'
      />
    </FormContainer>
  )
}

export default Recover;
