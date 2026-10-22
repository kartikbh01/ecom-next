"use client"
export default function GlobalError({ error }) {
    // when there's an error in any layout.js, it will be handled by a parent error.js because, any layout sits above the error boundary in the next.js rendering hierarchy
    // but if the root layout has any error, there's no parent error.js,
    // so this file handles the error from root layout

    // this works only in prod
    // this needs to have html and body tags because this is the topmost boundary which completely replaces the whole application as it sits above the root layout
    return <>
        <html>
            <body>
                <div>
                    I will handle if you screw up anything in root layout itself {error.message}
                </div>
                <button onClick={() => window.location.reload()}>Click me! everything will be fine</button>
            </body>
        </html>
    </>
}