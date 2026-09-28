import { isRouteErrorResponse, useRouteError } from 'react-router'

export function ErrorElement() {
  const err = useRouteError()
  if (isRouteErrorResponse(err)) return <div>{err.status}</div>
  if (err instanceof Error) return <div>{err?.message}</div>
  return <div>"INTERNAL SERVER ERROR"</div>
}
