import React from 'react'

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20";
const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

const emptyForm = { name: '', email: '', username: '', password: '', confirmPassword: '' };

export default function LoginForm() {
    let [mode, setMode] = React.useState('login');
    let [form, setForm] = React.useState(emptyForm);
    let [error, setError] = React.useState('');
    let isSignup = mode === 'signup';

    function update(field) {
        return (e) => setForm({ ...form, [field]: e.target.value });
    }

    function switchMode() {
        setMode(isSignup ? 'login' : 'signup');
        setForm(emptyForm);
        setError('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isSignup) {
            if (form.password.length < 6) {
                setError('Password must be at least 6 characters.');
                return;
            }
            if (form.password !== form.confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
        }
        setError('');
        // TODO: call the auth API once the server has login/signup routes
    }

  return (
    <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">{isSignup ? 'Create an account' : 'Welcome back'}</h1>
        <p className="mt-1 text-sm text-slate-600">{isSignup ? 'Sign up to get started' : 'Sign in to your account'}</p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {error && (
                <div role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">{error}</div>
            )}
            {isSignup && (
                <>
                    <div>
                        <label htmlFor="name" className={labelClass}>Full name</label>
                        <input type="text" id="name" name="name" required className={inputClass} value={form.name} onChange={update('name')} />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input type="email" id="email" name="email" required className={inputClass} value={form.email} onChange={update('email')} />
                    </div>
                </>
            )}
            <div>
                <label htmlFor="username" className={labelClass}>Username</label>
                <input type="text" id="username" name="username" required className={inputClass} value={form.username} onChange={update('username')} />
            </div>
            <div>
                <label htmlFor="password" className={labelClass}>Password</label>
                <input type="password" id="password" name="password" required className={inputClass} value={form.password} onChange={update('password')} />
            </div>
            {isSignup && (
                <div>
                    <label htmlFor="confirmPassword" className={labelClass}>Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required className={inputClass} value={form.confirmPassword} onChange={update('confirmPassword')} />
                </div>
            )}
            <button type="submit" className="w-full rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                {isSignup ? 'Sign up' : 'Login'}
            </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button type="button" onClick={switchMode} className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
                {isSignup ? 'Login' : 'Sign up'}
            </button>
        </p>
    </div>
  )
}
