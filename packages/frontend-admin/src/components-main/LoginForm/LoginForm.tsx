import React, { Component, FormEvent, ChangeEvent } from 'react';
import { loginRequest } from '../../services';
import { Redirect } from 'react-router';

interface ILoginFormState {
  error: string | null;
  username: string;
  password: string;
  redirectToNextPage?: boolean;
}

export class LoginForm extends Component<{}, ILoginFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: null,
      password: '',
      username: ''
    };

    this.usernameChanged = this.usernameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public async handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      await loginRequest(this.state.username, this.state.password);
      this.setState({ redirectToNextPage: true });
    } catch (error) {
      this.setState({ error });
    }
  }

  public usernameChanged(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  public passwordChanged(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  public render() {
    if (this.state.redirectToNextPage) {
      return <Redirect push to='/home' />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text'
            value={this.state.username}
            onChange={this.usernameChanged} />
        </label>
        <label>
          Password:
          <input type='password'
            value={this.state.password}
            onChange={this.passwordChanged} />
        </label>
        <input type='submit' value='Login' />
        {
          this.state.error && <div>{this.state.error}</div>
        }
      </form>
    );
  }
}
