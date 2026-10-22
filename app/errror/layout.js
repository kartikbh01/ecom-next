export default function Layout({ children }) {
    // throw new Error("random error")
    // if you throw this error, it will be handled by the parent error.js
    // because layout.js sits above error.js in rendering hierarchy of next.js and cannot be handled by error.js in the current directory.
    // it goes all the way up to root error.js
    return <div>{children}</div>
}