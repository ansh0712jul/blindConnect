import React,{lazy, Suspense} from 'react'
import {Route,BrowserRouter,Routes} from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute'
import Loaders from './components/layout/Loaders'

const Home=lazy(()=> import("./pages/Home"))
const Login=lazy(()=> import("./pages/Login"))
const Chat=lazy(()=> import("./pages/Chat"))
const Group=lazy(()=> import("./pages/Group"))
const NotFound=lazy(()=> import("./pages/NotFound"))


let user=true
;

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loaders/>}>
    <Routes>
      <Route element={<ProtectRoute user={user}/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat/:chatId' element={<Chat/>}/>
        <Route path='/groups' element={<Group/>}/>
      </Route>
      <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

<Route path='*' element={<NotFound/>}/>
    </Routes>
    </Suspense>
    
    </BrowserRouter>
  )
}

export default App