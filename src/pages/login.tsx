import React from 'react';
import { signIn } from 'next-auth/client';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    console.log(email);
    await signIn('credentials', {
      email,
      password,
      callbackUrl: `/post`,
    });
  };
  return (
    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="leading-loose">
          <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p className="text-white font-medium text-center text-lg font-bold">LOGIN</p>
            <div>
              <label className="block text-sm text-white" htmlFor="email">
                E-mail
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                id="email"
                placeholder="Email"
                aria-label="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label className="block  text-sm text-white">Password</label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                id="password"
                placeholder="Password"
                arial-label="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-4 items-center flex justify-center">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
