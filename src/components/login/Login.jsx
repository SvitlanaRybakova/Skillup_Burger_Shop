//    
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <MDBContainer className='p-3 my-5 d-flex flex-column w-50'>
      <MDBTabs
        pills
        justify
        className='mb-3 d-flex flex-row justify-content-between'
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab1')}
            active={justifyActive === 'tab1'}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab2')}
            active={justifyActive === 'tab2'}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className='text-center mb-3'>
            <p>Sign in with:</p>
            <div
              className='d-flex justify-content-between mx-auto'
              style={{ width: '40%' }}
            >
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='facebook-f' size='sm' />
              </MDBBtn>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='twitter' size='sm' />
              </MDBBtn>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='google' size='sm' />
              </MDBBtn>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='github' size='sm' />
              </MDBBtn>
            </div>
            <p className='text-center mt-3'>or:</p>
          </div>
          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='form1'
            type='email'
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form2'
            type='password'
          />
          <div className='d-flex justify-content-between mx-4 mb-4'>
            <MDBCheckbox
              name='flexCheck'
              value=''
              id='flexCheckDefault'
              label='Forgot password?'
            />
            <Link to={'/'}>Forgot password</Link>
          </div>
          <MDBBtn className='mb-4 w-100'>Remember me</MDBBtn>
          <p className='text-center'>
            Not a member? <a href='#!'>Register</a>
          </p>
        </MDBTabsPane>
        {/* TAB 2 */}
        <MDBTabsPane show={justifyActive === 'tab2'}>
          <div className='text-center mb-3'>
            <p>Sign in with:</p>
            <div
              className='d-flex justify-content-between mx-auto'
              style={{ width: '40%' }}
            >
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='facebook-f' size='sm' />
              </MDBBtn>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='twitter' size='sm' />
              </MDBBtn>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='google' size='sm' />
              </MDBBtn>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: '#1266f1' }}
              >
                <MDBIcon fab icon='github' size='sm' />
              </MDBBtn>
            </div>
            <p className='text-center mt-3'>or:</p>
          </div>
          <MDBInput
            wrapperClass='mb-4'
            label='First Name'
            id='form3'
            type='text'
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Last Name'
            id='form4'
            type='text'
          />
          <MDBInput wrapperClass='mb-4' label='Email' id='form5' type='email' />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form6'
            type='password'
          />
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox
              name='flexCheck'
              id='flexCheckDefault'
              label='I have read and accept the conditions'
            />
          </div>
          <MDBBtn className='mb-4 w-100'>Register</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
