import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from "react-router-dom"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import app from '../../firebase/firebase'
import swal from 'sweetalert'
import './Login.css'
const auth = getAuth(app);

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: ""
  })
  const [Loading, setLoading] = useState(false)
  const [otpSent, setoptSent] = useState(false)
  const [OTP, setOPT] = useState("")

  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
    }, auth);
  }


  const requestOtp = () => {
    setLoading(true);
    generateRecaptha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+91${form.mobile}`, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
        swal({
          text: "OTP Sent",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setoptSent(true);
        setLoading(false);
      }).catch((error) => {
        console.log(error)
      })
  }


  return (
    <div className='w-full flex flex-col items-center mt-14'>
      <h1 className='text-xl font-bold'>
        Sign up
      </h1>
      {otpSent ?
        <>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-300">
                OTP
              </label>
              <input


                placeholder='OTP'
                id="OTP"
                name="OTP"
                value={OTP}
                onChange={(e) => setOPT(e.target.value)}
                className="loginbg text-white w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:bg-white focus:text-black"
              />
            </div>
          </div>
          <div className="p-2 w-full mt-2">
            <button  className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
              {Loading ? <TailSpin height={25} color="white" /> : 'Confirm Opt'}
            </button>
          </div>
        </>
        :
        <>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-300">
                Name
              </label>
              <input
                type="name"
                id="name"
                placeholder='Name'
                name="email"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="loginbg text-white w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:bg-white focus:text-black"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-300">
                Mobile Number
              </label>
              <input

                type={"Number"}
                placeholder='Mobile Number'
                id="mobile"
                name="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="loginbg text-white w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:bg-white focus:text-black"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder='password'
                name="email"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="loginbg text-white w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:bg-white focus:text-black"
              />
            </div>
          </div>
          <div className="p-2 w-full mt-2">
            <button onClick={requestOtp} className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
              {Loading ? <TailSpin height={25} color="white" /> : 'Request OTP'}
            </button>
          </div>
        </>
      }
      <div>
        <p className='mt-1'>Already have an account ? <Link to={'/login'}><span className='signin color-#ffd700'>Login</span></Link></p>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  )
}
export default Signup



