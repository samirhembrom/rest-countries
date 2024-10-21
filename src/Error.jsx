import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Opps!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-xl">{error.statusText || error.message}</i>
      </p>
    </div>
  )
}