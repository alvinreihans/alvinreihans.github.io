import { Link  } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <h1>404</h1>
      <Link to="/">Home</Link><p> / Works</p>
    </>
  )
};

export default NoPage;