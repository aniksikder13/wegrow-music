import { useState } from 'react';
import users from '../utility/users.json'
import { useCookies } from 'react-cookie'

export default function Auth() {
  const [cookies, setCookie] = useCookies(['user'])
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Form submission logic (e.g., validation, API calls)
    const user= users.find(user => userData.email === user.email)

    if(user.password === userData.password){
        setCookie('user', JSON.stringify(user), )
        window.location.replace('/trending-music')
    }

  }

  return (
    <div className="w-[600px] mt-[100px] mx-auto bg-white border-[1px] rounded-md py-4 px-3">
      <h1 className="border-b-[1px] mb-4 pb-2">Sign in please</h1>
      <form className="grid grid-cols-1" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={userData.email}
          placeholder="Type your email"
          className="border-[1px] rounded-sm p-2 mb-3"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={userData.password}
          placeholder="Type your password"
          className="border-[1px] rounded-sm p-2 mb-3"
          onChange={handleChange}
        />
        <button className="py-3 bg-green-600 text-white hover:bg-green-[400]">
          Sign in
        </button>
      </form>
    </div>
  );
}
