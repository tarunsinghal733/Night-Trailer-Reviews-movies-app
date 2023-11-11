import React, { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom"
import { query, where, getDocs } from '@firebase/firestore'
import { usersRef } from '../../firebase/firebase'
import { Appstate } from '../../App'
import swal from 'sweetalert'
import bcrypt from 'bcryptjs'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const useAppstate = useContext(Appstate)
  const [form, setForm] = useState({
    mobile: "",
    password: ""
  })
  const [Loading, setLoading] = useState(false)
  const loginuser = async () => {
    setLoading(true);
    try {
      const quer = query(usersRef, where('mobile', '==', form.mobile))
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        const _data = doc.data();
        const isUser = bcrypt.compareSync(form.password, _data.password);
        if(isUser) {
          useAppstate.setlogin(true);
          useAppstate.setuserName(_data.name);
          swal({
            title: "Logged In",
            icon: "success",
            buttons: false,
            timer: 3000
          })
          navigate('/')
        } else {
          swal({
            title: "Invalid Credentials",
            icon: "error",
            buttons: false,
            timer: 3000
          })
        }
      })
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
    setLoading(false);
  }





  return (
    <div className='w-full flex flex-col items-center mt-20'>
      <div className='text-xl font-bold'>
        Login
      </div>
      <div className="p-2 w-full md:w-1/3">
        <div className="relative">
          <label className="leading-7 text-sm text-gray-300">
            Mobile Number
          </label>
          <input

            type={"Number"}
            placeholder='Mobile Number'
            id="name"
            name="name"
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
        <button onClick={loginuser} className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
          {Loading ? <TailSpin height={25} color="white" /> : 'Login'}
        </button>
      </div>
      <div className=''>
        <p className='mt-1'>Do have an account? <Link to={'/signup'}><span className='signin color-#ffd700'>Sign up</span></Link></p>
      </div>
    </div>
  )
}

export default Login