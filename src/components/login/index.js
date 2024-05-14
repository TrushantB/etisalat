export default function Login() {
  return (
    <div className="flex flex-col justify-center min-h-full px-4 pt-2 pb-4 bg-white rounded-md lg:px-4">
      <h2 className="pb-2 text-xl font-bold text-secondary-in min-[1800px]:pb-6">Admin Login</h2>
      <div className="w-full">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-base font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-base sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-base font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm text-base">
                <a
                  href="#"
                  className="font-semibold text-[rgba(224,8,0)] hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-base sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-gradient-to-r from-[rgba(10,10,10,0.5)] to-[rgba(224,8,0,0.5)] px-3 py-1.5 text-sm text-base font-semibold leading-6 text-white shadow-sm"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
