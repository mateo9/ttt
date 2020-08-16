import React from "react"
import PropTypes from "prop-types"
class UserRegistationForm extends React.Component {
  constructor(props) {
    super(props)
    this.emailElement = React.createRef();
    this.passwordElement = React.createRef();
    this.password_confirmation = React.createRef();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    const email = this.emailElement.current.value;
    const password = this.passwordElement.current.value;
    const password_confirmation = this.password_confirmation.current.value;
    let body = JSON.stringify({
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    })

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        body: body,
    }).then((response) => {
      return response.json()
    })
    
  }
  render () {
    return (
      <React.Fragment>
        <form className='registration-form' onSubmit={this.handleRegistration}>
          <div className='form-field'>
            <input type='email' ref={this.emailElement}
              placeholder='Email'
              />
          </div>
          <div className='form-field'>
            <input type='password' ref={this.passwordElement}
              placeholder='password'
              />
          </div>
          <div className='form-field'>
            <input type='password' ref={this.password_confirmation}
              placeholder='password_confirmation'
              />
          </div>
          <button type='submit' className='main-btn submit-btn'>Register Now</button>
        </form>
      </React.Fragment>
    );
  }
}

export default UserRegistationForm
