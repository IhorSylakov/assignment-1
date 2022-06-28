import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { registerUser } from '../../store/reducers/ActionCreators';
import './Login.css';

export default function Login() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name,
      email,
      client_id: 'ju16a6m81mhid5ue1z3v2g0uh',
    }
    dispatch(registerUser(user))
  }

  return(
    <div className="login">
      <h1 className="login__title">
        Welcome back <br/> Please login to start
      </h1>

      <form
        className="login__form"
        onSubmit={handleSubmit}
      >
        <label className="login__row">
          <span className="login__label">name:</span>
          <input
            type="text"
            name="name"
            autoFocus
            className="login__input"
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label className="login__row">
          <span className="login__label">email:</span>
          <input
            type="email"
            name="email"
            className="login__input"
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="login__submit"
        >
          go
        </button>
      </form>
    </div>
  )
}
