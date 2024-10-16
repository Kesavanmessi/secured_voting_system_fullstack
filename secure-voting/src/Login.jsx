import { useState } from 'react';

function Login({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Admin and voter credentials
  const adminCredentials = [
    { id: 1, name: 'admin1', password: 'admin123' },
    { id: 2, name: 'admin2', password: 'admin456' },
  ];

  const voterCredentials = [
    { id: 1, name: 'voter1', password: 'voter123' },
    { id: 2, name: 'voter2', password: 'voter456' },
  ];

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    let validCredentials = false;

    if (login === 'Admin') {
      validCredentials = adminCredentials.some(
        (admin) => admin.name === username && admin.password === password
      );
    } else if (login === 'Voter') {
      validCredentials = voterCredentials.some(
        (voter) => voter.name === username && voter.password === password
      );
    }

    if (validCredentials) {
      window.location.href = '/admin-dashboard';  // Replace with actual next page URL
    } else {
      setErrorMessage('Invalid username or password');
      setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col bg-black justify-center items-center min-h-screen">
        <div className="border-2 border-blue-500 p-10 rounded-lg">
          <h1 className="text-5xl text-white mb-7 text-green-500">{login} Login</h1>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}  {/* Error message */}

          <form onSubmit={handleLogin}>
            <label htmlFor="username" className="text-blue-400">
              Username:
            </label>
            <br />
            <input
              type="text"
              className="pl-2 mt-2 focus:outline-none text-xl w-full"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <label htmlFor="password" className="text-blue-400">
              Password:
            </label>
            <br />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="pl-2 mt-2 focus:outline-none text-xl w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-600"
              >
                {showPassword ? '🙈' : '👁'}  {/* Toggle icon */}
              </button>
            </div>

            <button
              type="submit"
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
