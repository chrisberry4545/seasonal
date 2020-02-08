import React, { Component, FormEvent, ChangeEvent } from 'react';

import { LOGIN_URL } from '../../config';

interface ILoginPageState {
  error: string | null;
  username: string;
  password: string;
}

const login = async (username: string, password: string) => {
  try {
    const response = await fetch(LOGIN_URL, {
      body: JSON.stringify({
        password,
        username
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const result = await response.json();
    if (result.error) {
      return JSON.stringify(result);
    }
    return JSON.stringify(result);
  } catch (err) {
    return JSON.stringify(err);
  }
};

export class LoginPage extends Component<{}, ILoginPageState> {
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
    const result = await login(this.state.username, this.state.password);
    this.setState({ error: result });
  }

  public usernameChanged(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  public passwordChanged(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  public render() {
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
