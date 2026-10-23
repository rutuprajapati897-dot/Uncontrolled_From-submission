
import { useRef, useState } from "react";

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loginData, setLoginData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setLoginData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-emerald-950 to-teal-800 p-5">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

        <div className="flex flex-col justify-center bg-emerald-800 p-10 text-white">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-4xl">
            🔐
          </div>

          <h1 className="text-4xl font-extrabold">
            Welcome Back!
          </h1>

          <p className="mt-4 leading-7 text-emerald-100">
            Sign in to access your personal dashboard.
            Your learning journey continues here.
          </p>

          <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5">
            <p className="text-lg font-semibold">
              ✨ Simple. Secure. Smart.
            </p>
            <p className="mt-2 text-sm text-emerald-100">
              Enter your details to continue.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Login
          </h2>

          <p className="mb-7 mt-2 text-gray-500">
            Enter your account information below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Username
              </label>
              <input
                ref={usernameRef}
                type="text"
                placeholder="Enter username"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 p-3 font-bold text-white shadow-lg transition hover:bg-emerald-800"
            >
              Login →
            </button>
          </form>

          {loginData && (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="mb-3 font-bold text-emerald-800">
                ✓ Form Submitted!
              </h3>
              <p className="break-words">
                <b>Username:</b> {loginData.username}
              </p>
              <p>
                <b>Password:</b> {loginData.password}
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="sr-only">Student Login Page</p>
    </div>
  );
}

export default App;
