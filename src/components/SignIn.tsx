

// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import loginImage from "../assets/login.jpg";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../store.ts";
// import { loginUser } from "../reducers/AuthReducer.ts";
// import { User } from "../models/User";

// export default function SignInPage() {
//   const dispatch = useDispatch<AppDispatch>();
//   const isAuthenticated = useSelector((state: RootState) => state.authData.isAuthenticated);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     address: "",
//   });

//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/addpost");
//     }
//   }, [isAuthenticated, navigate]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === "confirmPassword") {
//       setConfirmPassword(value);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = useCallback(
//     (e: React.FormEvent) => {
//       e.preventDefault();

//       if (formData.password !== confirmPassword) {
//         setError("Passwords do not match");
//         return;
//       }

//       const user: User = {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//         address: formData.address,
//       };

//       dispatch(loginUser(user));

//       setFormData({ username: "", email: "", password: "", address: "" });
//       setConfirmPassword("");
//       setError("");
//     },
//     [formData, confirmPassword, dispatch]
//   );

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Section */}
//       <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
//         <h1 className="text-2xl font-bold tracking-tighter">FLIPIT.</h1>

//         <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
//           <h2 className="text-5xl font-bold mb-4">Welcome!</h2>
//           <p className="text-gray-600 mb-8">Create an account to continue.</p>

//           {error && <p className="text-red-500 mb-4">{error}</p>}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="mt-6 text-center text-gray-600">
//             Already have an account?{" "}
//             <button className="text-blue-600 hover:underline" onClick={() => navigate("/")}>
//               Login
//             </button>
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="hidden lg:flex w-1/2 bg-black text-white flex-col relative p-12">
//         <div className="absolute top-0 right-0 p-8 flex gap-4">
//           <button className="text-sm hover:text-gray-300 transition-colors" onClick={() => navigate("/home")}>
//             Flipit Page
//           </button>
//           <button className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
//             Join Us
//           </button>
//         </div>

//         {/* Info Section */}
//         <div className="flex items-center gap-3 mb-8">
//           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
//             <span className="text-black">👥</span>
//           </div>
//           <div>
//             <div className="font-medium">Largest Space</div>
//             <div className="text-sm text-gray-400">Community</div>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 relative">
//           <img src={loginImage} alt="Astronaut in colorful space" className="object-contain w-full h-auto" />
//         </div>

//         {/* Bottom Text */}
//         <div className="mt-auto">
//           <h2 className="text-4xl font-bold mb-8 max-w-md">
//             Go anywhere you want in a Galaxy full of wonders!
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../reducers/AuthReducer";
import loginImage from "../assets/login.jpg";
import { RootState } from "../store"; // Ensure correct import

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");

  // **Get error and loading state from Redux**
  const { error: authError, loading } = useSelector((state: RootState) => state.authData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setError("Passwords do not match");
      alert("Passwords do not match"); // ✅ Alert added for error display
      return;
    }

    dispatch(
      registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        address: formData.address,
      }) as any
    ).then((result: any) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/addpost");
      }
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
        <h1 className="text-2xl font-bold tracking-tighter">FLIPIT.</h1>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <h2 className="text-5xl font-bold mb-4">Welcome!</h2>
          <p className="text-gray-600 mb-8">Create an account to continue.</p>

          {/* **Show validation or Redux error** */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {authError && <p className="text-red-500 mb-4">{authError}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* **Show loading state when submitting** */}
            <button
              type="submit"
              className="w-full bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-600 hover:underline" onClick={() => navigate("/")}>
              Login
            </button>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex w-1/2 bg-black text-white flex-col relative p-12">
        <div className="absolute top-0 right-0 p-8 flex gap-4">
          <button className="text-sm hover:text-gray-300 transition-colors" onClick={() => navigate("/home")}>
            Flipit Page
          </button>
          <button className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Join Us
          </button>
        </div>

        {/* Info Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-black">👥</span>
          </div>
          <div>
            <div className="font-medium">Largest Space</div>
            <div className="text-sm text-gray-400">Community</div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <img src={loginImage} alt="Astronaut in colorful space" className="object-contain w-full h-auto" />
        </div>

        {/* Bottom Text */}
        <div className="mt-auto">
          <h2 className="text-4xl font-bold mb-8 max-w-md">
            Go anywhere you want in a Galaxy full of wonders!
          </h2>
        </div>
      </div>
    </div>
  );
}
