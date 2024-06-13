import { Outlet, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';

const Netflixclone = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
      <Outlet />
    </div>
  );
};
export default Netflixclone;
