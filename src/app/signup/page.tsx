import React from 'react';

const Signup = () => {
  return (
    <>
      <div className="signup-container md:w-3/4 mx-auto my-20 p-8">
        <div className="signup-form bg-[var(--form-background)] p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-[var(--primary-color)] font-bold text-2xl mb-4">Create Your Account</h2>
          <form>
            <div className="form-group mb-6 text-left">
              <label htmlFor="username" className="block text-[var(--primary-color)] font-bold text-base mb-3">Username</label>
              <input type="text" id="username" placeholder="Enter your username" className="w-full p-3 border border-[var(--input-border)] rounded-md text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none" />
            </div>
            <div className="form-group mb-6 text-left">
              <label htmlFor="email" className="block text-[var(--primary-color)] font-bold text-base mb-3">Email</label>
              <input type="email" id="email" placeholder="Enter your email" className="w-full p-3 border border-[var(--input-border)] rounded-md text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none" />
            </div>
            <div className="form-group mb-6 text-left">
              <label htmlFor="password" className="block text-[var(--primary-color)] font-bold text-base mb-3">Password</label>
              <input type="password" id="password" placeholder="Enter your password" className="w-full p-3 border border-[var(--input-border)] rounded-md text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none" />
            </div>
            <button type="submit" className="signup-btn w-1/3 mx-auto py-3 bg-[var(--primary-color)] text-white font-bold rounded-md cursor-pointer hover:bg-red-600">Sign Up</button>
            <p className="login-link mt-4 text-sm">
              Already have an account? <span className="text-[var(--primary-color)] underline cursor-pointer">Log In</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
