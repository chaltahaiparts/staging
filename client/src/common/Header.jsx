import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/motorcycles', label: 'Motorcycles' },
  { to: '/course', label: 'Course' },
  { to: '/about-us', label: 'About' },
  { to: '/enquiry', label: 'Enquiry' },
];

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-xl font-extrabold text-white shadow-md">C</span>
          <span className="text-3xl font-extrabold uppercase tracking-wider text-slate-900">
            Chalta Hai <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Parts</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
          <Link to="/login" className="ml-3 px-4 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
