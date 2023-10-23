/**
 * https://reactrouter.com/en/main/route/error-element
 * https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors
 */
import { FC } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export const ErrorBoundary: FC = () => {
  const error = useRouteError();
  // console.error('ErrorBoundary', error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
};
