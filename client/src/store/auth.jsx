/** @format */

import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const authorization = `Bearer ${token}`;
  const storetokeninLS = (servertoken) => {
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
  };
  let isloggedIn = !!token;

  //tackling logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userdata);
        setUser(data.userdata);
      } else {
        console.error("error fection user data");
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };
  // to fetchh the services data from thye database
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      } else {
        console.error("error fection services data");
      }
    } catch (error) {
      console.error("Error fetching services data from frontend", error);
    }
  };
  // Authntication part starts here
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isloggedIn,
        storetokeninLS,
        LogoutUser,
        user,
        services,
        authorization,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authContextValue;
};

// import { createContext, useContext, useState, useEffect } from "react";

// // eslint-disable-next-line react-refresh/only-export-components
// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState("");

//   const storeTokenInLS = (serverToken) => {
//     localStorage.setItem("token", serverToken);
//     setToken(serverToken);
//   };

//   const LogoutUser = () => {
//     setToken("");
//     localStorage.removeItem("token");
//   };

//   const userAuthentication = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/user", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setUser(data.userdata);
//         storeTokenInLS(data.token);
//         console.log("User data fetched");
//       } else {
//         console.error("Failed to fetch user data");
//       }
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     if (token) userAuthentication();
//   }, [token]);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn: !!token, storeTokenInLS, LogoutUser, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const authContextValue = useContext(AuthContext);
//   if (!authContextValue) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return authContextValue;
// };
