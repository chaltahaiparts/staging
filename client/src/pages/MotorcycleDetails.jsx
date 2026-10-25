import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motorCycleData } from '../data/motorCycleData';

const MotorcycleDetails = () => {
    let { id } = useParams();
    let m = motorCycleData.find((bike) => bike.id === parseInt(id));

    if (!m) {
        return (
            <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-slate-600">Motorcycle not found.</p>
                <Link to="/motorcycles" className="mt-4 inline-block text-blue-600 font-medium hover:underline">Back to motorcycles</Link>
            </div>
        );
    }

    return (
        <div>
            <Link to="/motorcycles" className="text-sm font-medium text-blue-600 hover:underline">&larr; Back to motorcycles</Link>
            <div className="mt-4 grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
                <img src={m.image} alt={m.title} className="h-full w-full object-cover" />
                <div className="p-8">
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{m.brand}</span>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{m.title}</h1>
                    <p className="mt-4 leading-relaxed text-slate-600">{m.body}</p>
                    <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-sm">
                        <div><dt className="text-slate-500">Engine</dt><dd className="font-semibold">{m.engineCapacity}</dd></div>
                        <div><dt className="text-slate-500">Power</dt><dd className="font-semibold">{m.power}</dd></div>
                        <div><dt className="text-slate-500">Price</dt><dd className="font-semibold">{m.price}</dd></div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default MotorcycleDetails;
