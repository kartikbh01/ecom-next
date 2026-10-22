"use client"

export default function Error({ error, reset }) {
    return <>
        <div>
            Error: {error.message}
        </div>
        <button className="border p-2 m-2 rounded-xl" onClick={reset}>Try again</button>
    </>
}