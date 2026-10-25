import React from 'react'
import { Link } from 'react-router-dom'
import { motorCycleData } from '../data/motorCycleData';

export default function Motorcycles() {
  return (
    <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Motorcycles</h1>
        <p className="mt-2 text-slate-600">Choose from our curated selection.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motorCycleData.map((m) => (
                <article key={m.id} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <img src={m.image} alt={m.title} className="h-48 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-5">
                        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{m.brand}</span>
                        <h2 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h2>
                        <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">{m.body}</p>
                        <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 text-sm">
                            <div><dt className="text-slate-500">Engine</dt><dd className="font-medium">{m.engineCapacity}</dd></div>
                            <div><dt className="text-slate-500">Power</dt><dd className="font-medium">{m.power}</dd></div>
                        </dl>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-lg font-bold text-slate-900">{m.price}</span>
                            <Link to={`/motorcycles/${m.id}`} className="px-4 py-2 rounded-md bg-slate-900 text-sm font-semibold text-white hover:bg-slate-700 transition-colors">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </div>
  )
}
