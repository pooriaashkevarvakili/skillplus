import { TextInput } from "flowbite-react";
import { useState } from "react";
import instance from "@/axios/axios";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
export default function Login() {
    const [isStarMode, setIsStarMode] = useState(true);

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [id, setId] = useState('')
    const router = useRouter()
    const setlogin = () => {
        const data = {
            password: password,
            email: email,
            username: username,
            id: id,

        };
        instance
            .post("/auh/login", { ...data })
            .then(() => {
                if (!password || !username) {
                    router.push('/');

                }

            })
            .catch((error) => {
                console.log("Error connecting to the server:", error);

                router.push('/');
            });
    };
    const [type, setType] = useState("password");

    const [icon, setIcon] = useState(FaEye);
    const handleToggle = () => {
        setIsStarMode((prevState) => !prevState);
        if (type === "password") {
            setIcon(FaEye);
            setType("text");
        } else {
            setIcon(FaRegEye);
            setType("password");
        }
    };
    return (
        <div>
            <div className="flex  items-center justify-center text-2xl yekan-bold"> ورود اسکیل پلاس</div>
            <div dir="rtl" className="flex mt-6 flex-col gap-y-3 items-center justify-center">


                <TextInput
                    value={username}
                    onChange={(e) => {

                        setUsername(e.target.value);
                    }}
                    className="w-[400px] " id="name1" name="username" type="text" placeholder="نام کاربری" required />
                <TextInput value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} className="w-[400px]  " placeholder="ایمیل" id="password1" type="text" name="email" required />
                <div
                    onClick={handleToggle}
                    className="absolute top-[17.7rem] right-[51.3rem] transition duration-300 ease-in z-50 flex items-center ps-3.5 cursor-pointer"
                >
                    {isStarMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 cursor-pointer"
                            viewBox="0 0 24 14"
                            fill="none"
                        >
                            <path
                                d="M10.87 7C10.87 7.47405 11.2954 8 11.9985 8C12.7017 8 13.127 7.47405 13.127 7C13.127 6.52595 12.7017 6 11.9985 6C11.2954 6 10.87 6.52595 10.87 7Z"
                                fill="#9A9C9F"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.449753 8.13225C-0.149918 7.48271 -0.149917 6.51729 0.449753 5.86775C2.27874 3.88666 6.56013 0 11.9996 0C17.439 0 21.7204 3.88666 23.5494 5.86775C24.1491 6.51729 24.1491 7.48271 23.5494 8.13225C21.7204 10.1133 17.439 14 11.9996 14C6.56013 14 2.27874 10.1133 0.449753 8.13225ZM8.87001 7C8.87001 8.65685 10.2707 10 11.9985 10C13.7264 10 15.127 8.65685 15.127 7C15.127 5.34315 13.7264 4 11.9985 4C10.2707 4 8.87001 5.34315 8.87001 7Z"
                                fill="#9A9C9F"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="top-[5px] relative"
                            width="24"
                            height="14"
                            viewBox="0 0 24 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.441643 8.10641C-0.147214 7.46563 -0.147215 6.53437 0.441643 5.89359C2.25469 3.92067 6.54403 0 12 0C17.456 0 21.7453 3.92067 23.5584 5.89359C24.1472 6.53437 24.1472 7.46563 23.5584 8.10641C21.7453 10.0793 17.456 14 12 14C6.54403 14 2.25469 10.0793 0.441643 8.10641ZM7.09773 7.70711C6.69102 7.31658 6.69102 6.68342 7.09773 6.29289C7.50445 5.90237 8.16386 5.90237 8.57058 6.29289C10.5939 8.2357 13.4061 8.2357 15.4294 6.29289C15.8361 5.90237 16.4956 5.90237 16.9023 6.29289C17.309 6.68342 17.309 7.31658 16.9023 7.70711C14.0655 10.431 9.93452 10.431 7.09773 7.70711Z"
                                fill="#9A9C9F"
                            />
                        </svg>
                    )}
                </div>

                <TextInput value={password}

                    className="  w-[400px]" placeholder="کلمه عبور" id="password1"
                    type={type}
                    name="password"

                    autoComplete="current-password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} required />


            </div>

            <div className="flex items-center mt-4 justify-center">
                <button onClick={setlogin} className="w-[400px] text-white bg-[#EE2556] h-[50px] text-xl yekan-bold rounded-xl  mt-4" type="submit"> ورود</button>

            </div>

        </div>
    )
}