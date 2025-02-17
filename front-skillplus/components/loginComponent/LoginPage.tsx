import { TextInput } from "flowbite-react";
import { useState } from "react";
import instance from "@/axios/axios";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";

interface FormErrors {
  email: string;
  password: string;
  username: string;
}

export default function Signup() {
  const [isStarMode, setIsStarMode] = useState(true);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [loginStatus, setLoginStatus] = useState(null);
  const [inputColor, setInputColor] = useState("");
  const [id, setId] = useState('')
  const [family, setFamily] = useState<string>();
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
  
    username: '',
  
  });

  const validateField = (fieldName: keyof FormErrors, value: string): string => {
    switch (fieldName) {
      case 'email':
        return !value ? 'ایمیل را وارد کنید' : '';
      case 'password':
        return !value ? 'کلمه عبور را وارد کنید' : '';
     
      case 'username':
        return !value ? 'نام کاربری را وارد کنید' : '';
    
      default:
        return '';
    }
  };

  const handleInputChange = (
    fieldName: keyof typeof errors,
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
    
    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };



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
const router=useRouter()
const setlogin = () => {
  let hasErrors = false;

  // بررسی خطاها برای همه فیلدها
  const fieldsToValidate = { email, password, name, family, username };
  Object.keys(fieldsToValidate).forEach((key) => {
    const error = validateField(key as keyof FormErrors, fieldsToValidate[key]);
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [key]: error,
      }));
      hasErrors = true;
    }
  });

  // اگر خطایی وجود نداشت، درخواست ارسال شود
  if (!hasErrors) {
    const data = {
      email,
      password,
      username,
    };

    axios
      .post("http://92.119.57.159:3000/user/login", data)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log("Error connecting to server:", error);
        router.push("/login");
      });
  } else {
    console.log("Validation errors:", errors);
  }
};

  const [type, setType] = useState("password");

  return (
    <div dir="rtl">
      <div className="flex items-center justify-center text-2xl yekan-bold"> ورود اسکیل پلاس</div>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        setlogin();
      }} className="flex flex-col gap-y-3 mt-3 items-center justify-center">

        {/* ایمیل */}
        <div className="w-[400px] relative">
          <TextInput
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value, setEmail)}
            className={`w-full ${errors.email ? 'border-red-500' : ''}`}
            id="email1"
            type="email"
            placeholder="ایمیل"
            name="email"
            required
          />
          {errors.email && (
            <span className="absolute right-0 top-full text-sm text-red-500 mt-1">{errors.email}</span>
          )}
        </div>
        <div className="w-[400px] relative top-[2rem]">
          <TextInput
            value={username}
            onChange={(e) => handleInputChange('username', e.target.value, setUsername)}
            className={`w-full ${errors.username ? 'border-red-500' : ''}`}
            id="username1"
            name="username"
            type="text"
            placeholder="نام کاربری"
            required
          />
          {errors.username && (
            <span className="absolute right-0 top-full text-sm text-red-500 mt-1">{errors.username}</span>
          )}
        </div>
  {/* کلمه عبور */}
  <div className="relative w-[400px] top-[4rem]">
          <TextInput
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value, setPassword)}
            className={`w-full ${errors.password ? 'border-red-500' : ''}`}
            placeholder="کلمه عبور"
            id="password1"
            type={type}
            name="password"
            autoComplete="current-password"
            required
          />
          <button
            onClick={handleToggle}
            className="absolute left-full right-[23rem] top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {isStarMode ? (
              <FaEye className="w-5 h-5" />
            ) : (
              <FaRegEye className="w-5 h-5" />
            )}
          </button>
          {errors.password && (
            <span className="absolute right-0 top-full text-sm text-red-500 mt-1">{errors.password}</span>
          )}
        </div>
        {/* شماره موبایل */}
       

        <button
          onClick={setlogin}
          className="w-[400px] text-white bg-[#EE2556] h-[50px] text-xl yekan-bold rounded-xl mt-24"
          type="submit"
        >
ورود
        </button>
      </form>
    </div>
  );
}