import { BsGoogle } from "react-icons/bs";

export default function Page() {
  return (
    <div className="p-10 sm:p-16 flex flex-col justify-center bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Sign Up
      </h2>

      <form className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Full name"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Email address"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Password"
          />
        </div>

        <div className="relative">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100 bg-transparent py-3 px-1"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <input type="checkbox" className="accent-indigo-600" />
            Remember me
          </label>
          <a
            href="#"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          Create Account
        </button>
      </form>

      <div className="flex items-center gap-4 my-6">
        <hr className="grow border-gray-300 dark:border-gray-700" />
        <span className="text-gray-400 dark:text-gray-400 text-sm">OR</span>
        <hr className="grow border-gray-300 dark:border-gray-700" />
      </div>

      <button className="flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <BsGoogle />
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
        Already have an account?
        <a
          href="/login"
          className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
        >
          Sign in
        </a>
      </p>
    </div>
  );
}
