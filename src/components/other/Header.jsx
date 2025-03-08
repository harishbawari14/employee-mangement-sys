import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../../utils/localStorage';

const Header = (props) => {
  const [username, setUsername] = useState('Admin');
  // const [employees, setEmployees] = useState([]);
  // const [loggedInEmail, setLoggedInEmail] = useState('');

  useEffect(() => {
    // console.log("Fetching logged-in user...");
    // const { employees } = getLocalStorage(); 
    // console.log("Employees:", employees);

    const loggedInEmail = localStorage.getItem('loggedInUser')?.trim();
    // console.log("Logged-in Email:", loggedInEmail);

    if (!loggedInEmail) {
        // console.log("No logged-in user found.");
        return;
    }

    // const user = employees?.find(emp => emp.email.toLowerCase() === loggedInEmail.toLowerCase());
    // console.log("Found User:", user);
    const user = props.data; // Since data is already the logged-in employee


    if (user) {
        setUsername(user.firstName);
    }
}, [props]);


  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

//   return (
//     <div className="flex items-end justify-between">
//       <h1 className="text-2xl font-medium">
//         Hello <br />
//         <span className="text-3xl font-semibold">{username} 👋</span>
//       </h1>
//       <button onClick={logOutUser} className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm">
//         Log Out
//       </button>
//     </div>
//   );
// };

return (
  <div className="flex items-center justify-between bg-gray-900 p-5 rounded-lg shadow-lg">
    <h1 className="text-3xl font-semibold text-white">
      Hello, <br />
      <span className="text-4xl font-bold text-blue-400">{username} 👋</span>
    </h1>
    <button 
      onClick={logOutUser} 
      className="bg-red-500 hover:bg-red-700 transition-all duration-300 text-lg font-semibold text-white px-6 py-3 rounded-full shadow-md"
    >
      Log Out
    </button>
  </div>
);
}

export default Header;