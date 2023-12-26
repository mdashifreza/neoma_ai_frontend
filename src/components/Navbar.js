import React, { useState } from "react";
import axios from "axios";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [authData, setAuthData] = useState({
        email: "",
        password: "",
    })

    const [str, setStr] = useState("");

    const handleSignUp = () => {
        setStr("SignUp With Email and password")
        setIsModalOpen(true);
    };

    const handleSignIn = ()=>{
        setStr("Login With Email and password")
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitSignUp = async(e)=> {
        e.preventDefault();
        setStr("SignUp With Email and password");
        try{
            const url = 'http://localhost:8080/api/signup'
            await axios.post(url, authData);
            setIsModalOpen(false);
        }
        catch(error){
            console.log("caought error in frontend:", error)
        }
    }

    const [token, setToken]= useState();
    const handleSubmitSignIn = async(e)=> {
        e.preventDefault();
        setStr("Login With Email and password")
        try{
            const url = 'http://localhost:8080/api/signin';
            const response = await axios.post(url, authData);
            setToken(response.data)
            console.log("login succesfull", response.data)
            setIsModalOpen(false);
        }
        catch(error){
            console.log("error found in the webpage:", error)
        }
    }

    const handleInputCahnge = (e)=>{
        const { name, value } = e.target;
        setAuthData((prev)=>({...prev, [name]: value}));
    }

    return (
        <>
            <nav className="bg-purple-900 p-4 sticky top-0">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-xl">Neoma</div>
                        <p className="text-white text-xs">Generated Token:{JSON.stringify(token)}</p>
                        <div className="hidden md:flex space-x-4">
                            <button onClick={handleSignUp} className="text-white cursor-pointer">
                                SignUp
                            </button>
                            <button onClick={handleSignIn} className="text-white cursor-pointer">
                                SignIn
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isModalOpen && (
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-purple-800 p-8 rounded-md">
                            {/* Modal Content */}
                            <div className="text-white p-5">
                                <h2 className="text-2xl font-bold mb-4">{isModalOpen ? str : ""}</h2>
                                <div className="mt-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                        Email
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Enter your email"
                                        onChange={handleInputCahnge}
                                        value={authData.email}
                                        name="email"
                                    />

                                    <label className="block text-white text-sm font-bold mt-4 mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="password"
                                        placeholder="Enter your password"
                                        onChange={handleInputCahnge}
                                        value={authData.password}
                                        name="password" 
                                    />
                                </div>
                                <div className="flex items-center ml-[10%]">
                                    <button className="bg-teal-500 p-2 m-1 rounded" onClick={handleSubmitSignUp}>Submit</button>
                                    <span> Already have account ? </span><button className="bg-teal-500 p-2 m-1 rounded" onClick={handleSubmitSignIn}>Login</button>
                                </div>
                                <div className="ml-[30%]">
                                <button onClick={closeModal} className="text-white mt-10 bg-red-500 p-2 rounded">
                                        Close Window
                                </button>
                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
