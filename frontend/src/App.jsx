import React , { Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import ("./pages/Home"))
const Signin = React.lazy(() => import ("./pages/Signin"))
const Signup = React.lazy(()=> import ("./pages/Signup"))
const First =React.lazy(()=> import ("./pages/First"))
function App() {
  return (
    <div >
      <Router >
        <Suspense fallback={<div>Loading...</div>}>
            <Routes >
              <Route path="/" element={<Home></Home>} />
              <Route path="/Signin" element={<Signin></Signin>} />
              <Route path='/Signup' element={<Signup></Signup>}></Route>
              <Route path='/first' element={<First></First>} ></Route>
            </Routes>
        </Suspense>
    </Router>
    </div>
  );
}

export default App;
