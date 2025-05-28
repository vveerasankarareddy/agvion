import { NextPageContext } from "next"

interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "An unexpected error occurred"}</h1>
      <p>
        {statusCode === 404
          ? "Page not found."
          : "Sorry, something went wrong. Please try again later."}
      </p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 500
  return { statusCode }
}

export default Error
