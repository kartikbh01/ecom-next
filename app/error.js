"use client"
// error.js has to be a client component
export default function ErrorBoundary() {
    // if anything goes wrong in any route segment, it should be handled by it's own error.js
    // but if you don't have it, it keeps looking for it in it's parent segments traversing all the up to here in root error.js
    return <div>You screwed up something (this is coming from /)</div>
}