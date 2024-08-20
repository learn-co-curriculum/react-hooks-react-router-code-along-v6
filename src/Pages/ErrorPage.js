import NavBar from "../components/NavBar"

/**
 * Renders an error page with a navigation bar and a main content area displaying an error message.
 * This component is likely used as a fallback or error handling page in the application.
 */
function ErrorPage() {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>Oops! Looks like something went wrong.</h1>
        </main>
    </>
  )
}

export default ErrorPage;