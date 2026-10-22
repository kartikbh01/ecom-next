"use client"
export default function Error({ error }) {
    return <div className="text-red-300">Sommethign screwed up: {error.message}</div>
}