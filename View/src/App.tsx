import { Routes, Route } from 'react-router-dom'
import AuthLayout from './Auth/AuthLayout'
import SignUpLayout from './Auth/Signup/Layout'
import RegisterStepOne from './Auth/Signup/RegisterStepOne'
import RegisterStepTwo from './Auth/Signup/RegisterStepTwo'
import RegisterStepThree from './Auth/Signup/RegisterStepThree'
import SignIn from './Auth/SignIn'


const App = () => {
  return (
    <main className='' >
      <Routes>
        {/* Public URL */}
        <Route element={<AuthLayout />} >
          <Route element={<SignUpLayout />} >
            <Route index path='/sign-up/1' element={<RegisterStepOne />} />
            <Route path='/sign-up/2' element={<RegisterStepTwo />} />
            <Route path='/sign-up/3' element={<RegisterStepThree />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App; 