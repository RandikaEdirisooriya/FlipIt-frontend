// "use client"

// import type React from "react"

// import { useState } from "react"

// import { useNavigate } from "react-router-dom";
// import login from '../assets/login.jpg'


// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate(); 

//   const handleSubmit = () => {
    
//     // Handle login logic here
//     navigate("/addpost");
//   }

//   return (
    
//     <div className="flex min-h-screen">
//       {/* Left Section */}
//       <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold tracking-tighter">FLIPIT.</h1>
         
//         </div>

//         <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
//           <h2 className="text-5xl font-bold mb-4">Hi there!</h2>
//           <p className="text-gray-600 mb-8">Welcome to Flipit. </p>

//           <button className="flex items-center justify-center gap-2 w-full border rounded-lg p-3 mb-6 hover:bg-gray-50 transition-colors">
//             <img src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} className="w-5 h-5" />
//             Log in with Google
//           </button>

//           <div className="relative flex items-center gap-4 mb-6">
//             <div className="flex-1 border-t border-gray-200"></div>
//             <span className="text-gray-500 text-sm">or</span>
//             <div className="flex-1 border-t border-gray-200"></div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div className="text-right">
//               <a href="#" className="text-blue-600 text-sm hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors"
//             >
//               Log In
//             </button>
//           </form>

//           <p className="mt-6 text-center text-gray-600">
//             Don't have an account?{" "}
//             <button  className="text-blue-600 hover:underline" onClick={() => navigate("/signIn")}>
//               Sign up
//             </button>
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="hidden lg:block w-1/2 bg-black text-white relative">
//         <div className="absolute top-0 right-0 p-8 flex gap-4">
//           <button className="text-sm hover:text-gray-300 transition-colors" onClick={() => navigate("/home")}>Flipit Page</button>
//           <button className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
//             Join Us
//           </button>
//         </div>

//         <div className="p-12 h-full flex flex-col">
//           <div className="flex items-center gap-3 mb-8">
//             <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
//               <span className="text-black">👥</span>
//             </div>
//             <div>
//               <div className="font-medium">Largest Space</div>
//               <div className="text-sm text-gray-400">Community</div>
//             </div>
//           </div>

//           <div className="flex-1 relative">
//             <img
//               src={login}
//               alt="Astronaut in colorful space"
              
//               className="object-contain"
//             />
//           </div>

//           <div className="mt-auto">
//             <h2 className="text-4xl font-bold mb-8 max-w-md">Go anywhere you want in a Galaxy full of wonders!</h2>

           
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../reducers/AuthReducer";
import { RootState } from "../store";
import login from '../assets/login.jpg'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { loading, error } = useSelector((state: RootState) => state.authData.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }) as any).then((result: any) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/addpost");
      }
    });
  };

  return (
    
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">FLIPIT.</h1>
         
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-5xl font-bold mb-4">Hi there!</h2>
          <p className="text-gray-600 mb-8">Welcome to Flipit. </p>

          <button className="flex items-center justify-center gap-2 w-full border rounded-lg p-3 mb-6 hover:bg-gray-50 transition-colors">
            <img src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} className="w-5 h-5" />
            Log in with Google
          </button>

          <div className="relative flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors"
            >
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <button  className="text-blue-600 hover:underline" onClick={() => navigate("/signIn")}>
              Sign up
            </button>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:block w-1/2 bg-black text-white relative">
        <div className="absolute top-0 right-0 p-8 flex gap-4">
          <button className="text-sm hover:text-gray-300 transition-colors" onClick={() => navigate("/home")}>Flipit Page</button>
          <button className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Join Us
          </button>
        </div>

        <div className="p-12 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-black">👥</span>
            </div>
            <div>
              <div className="font-medium">Largest Space</div>
              <div className="text-sm text-gray-400">Community</div>
            </div>
          </div>

          <div className="flex-1 relative">
            <img
              src={login}
              alt="Astronaut in colorful space"
              
              className="object-contain"
            />
          </div>

          <div className="mt-auto">
            <h2 className="text-4xl font-bold mb-8 max-w-md">Go anywhere you want in a Galaxy full of wonders!</h2>

           
          </div>
        </div>
      </div>
    </div>
  )
}

