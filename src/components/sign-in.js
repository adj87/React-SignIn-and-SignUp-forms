/**
 * Import dependencies
 */
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




const SignIn = (props) => {
  return (
		<div className="row justify-content-center">
			<div className="col-lg-6 col-md-6 col-sm-8">
				<p style={{"fontSize":4+"rem","textAlign":"center"}} className='logo'>APACHAS</p>
				<Form method="POST" noValidate>
					<FormGroup>
						<Label>User Name</Label>
						<Input type="text" className="form-control" name="username"/>
					</FormGroup>
					<FormGroup>
						<Label>Password:</Label>
						<Input type="password" className="form-control" name="password"/>
					</FormGroup>
					<FormGroup check>
					<Label className="form-check-label">
						<Input className="form-check-input" type="checkbox"/> Remember me
					</Label>
					</FormGroup>
					<Button type="submit" color="primary" id="submit" size="lg" block>Sign in</Button>
					<div className="dropdown-divider"></div>
					    <a href="/sign-up.html">New around here? Sign up</a>
					    <a href="#" className="sign-up-link">Forgot password?</a>
				</Form>
			</div>
		</div>
  );
};

export default SignIn;
