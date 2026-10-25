import React from 'react'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Wide Range', text: 'Browse cruisers, sport bikes and street fighters from leading brands.' },
  { title: 'Clear Specs', text: 'Engine capacity, power and pricing laid out side by side.' },
  { title: 'Expert Help', text: 'Send an enquiry and our team will get back to you quickly.' },
];

export default function Home() {
  return (
    <div className="space-y-12">
        <section className="rounded-2xl bg-slate-900 px-8 py-16 text-center shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Find your next ride</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                Explore motorcycles, compare specifications and get in touch with us.
            </p>
            <div className="mt-8 flex justify-center gap-3">
                <Link to="/motorcycles" className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">Browse motorcycles</Link>
                <Link to="/enquiry" className="px-6 py-3 rounded-md border border-slate-600 text-white font-semibold hover:bg-slate-800 transition-colors">Contact us</Link>
            </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900">{f.title}</h2>
                    <p className="mt-2 text-slate-600">{f.text}</p>
                </div>
            ))}
        </section>
    </div>
  )
}
