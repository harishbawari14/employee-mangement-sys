import { useState } from 'react'
import { motion } from "framer-motion";

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-emerald-600 p-20'>
//             <form 
//             onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'
//             >
//                 <input 
//                 value={email}
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
//                 />
//                 <input
//                 value={password}
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
//                 <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
//             </form>
//         </div>
//     </div>
//   )
// }


// export default Login

// return (
//     <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
//       <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-emerald-500">
//         <form 
//           onSubmit={(e) => submitHandler(e)}
//           className="flex flex-col items-center justify-center"
//         >
//           <input 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full outline-none bg-transparent border-2 border-emerald-500 text-white font-semibold text-lg py-3 px-6 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//             type="email"
//             placeholder="Enter your email" 
//           />
          
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//             className="w-full outline-none bg-transparent border-2 border-emerald-500 text-white font-semibold text-lg py-3 px-6 rounded-lg mt-4 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//             type="password"
//             placeholder="Enter password" 
//           />
  
//           <button 
//             className="mt-6 w-full text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-lg"
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login



return (
  <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-emerald-500"
    >
      <form 
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col items-center justify-center"
      >
        <motion.input 
          whileFocus={{ scale: 1.05 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full outline-none bg-transparent border-2 border-emerald-500 text-white font-semibold text-lg py-3 px-6 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          type="email"
          placeholder="Enter your email" 
        />
        
        <motion.input
          whileFocus={{ scale: 1.05 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
          className="w-full outline-none bg-transparent border-2 border-emerald-500 text-white font-semibold text-lg py-3 px-6 rounded-lg mt-4 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
          type="password"
          placeholder="Enter password" 
        />

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-lg"
        >
          Log in
        </motion.button>
      </form>
    </motion.div>
  </div>
);
}

export default Login;