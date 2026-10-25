import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
            <Outlet />
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Chalta Hai Parts. All rights reserved.
        </footer>
    </div>
  )
}
