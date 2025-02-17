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
  name: string;
  family: string;
  username: string;

}

export default function Signup() {
  const [isStarMode, setIsStarMode] = useState(true);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [loginStatus, setLoginStatus] = useState(null);
  const [inputColor, setInputColor] = useState("");
  const [id, setId] = useState('')
  const [family, setFamily] = useState<string>("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
    name: '',
    family: '',
    username: '',
 
  });

  const validateField = (fieldName: keyof FormErrors, value: string): string => {
    switch (fieldName) {
      case 'email':
        if (!value) {
          return 'ایمیل را وارد کنید';
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          return 'ایمیل نامعتبر است';
        }
        return '';
      case 'password':
        return !value ? 'کلمه عبور را وارد کنید' : '';
      case 'name':
        return !value ? 'نام را وارد کنید' : '';
      case 'family':
        return !value ? 'نام خانوادگی را وارد کنید' : '';
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

  const router = useRouter();

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
      family,
      password,
      name,
      username,
    };

    axios
      .post("http://92.119.57.159:3000/user/signup", data)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log("Error connecting to server:", error);
        router.push("/");
      });
  } else {
    console.log("Validation errors:", errors);
  }
};

  const [type, setType] = useState("password");

  return (
    <div dir="rtl">
      <div className="flex items-center justify-center text-2xl yekan-bold">ثبت نام اسکیل پلاس</div>
      
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

        {/* کلمه عبور */}
        <div className="relative w-[400px] top-[1rem]">
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

        {/* نام */}
        <div className="w-[400px] relative top-[2rem]">
          <TextInput
            value={name}
            onChange={(e) => handleInputChange('name', e.target.value, setName)}
            className={`w-full ${errors.name ? 'border-red-500' : ''}`}
            id="name1"
            name="name"
            type="text"
            placeholder="نام"
            required
          />
          {errors.name && (
            <span className="absolute right-0 top-full text-sm text-red-500 mt-1">{errors.name}</span>
          )}
        </div>

        {/* نام خانوادگی */}
        <div className="w-[400px] relative top-[3rem]">
          <TextInput
            value={family}
            onChange={(e) => handleInputChange('family', e.target.value, setFamily)}
            className={`w-full ${errors.family ? 'border-red-500' : ''}`}
            id="family1"
            name="family"
            type="text"
            placeholder="نام خانوادگی"
            required
          />
          {errors.family && (
            <span className="absolute right-0 top-full text-sm text-red-500 mt-1">{errors.family}</span>
          )}
        </div>

        {/* نام کاربری */}
        <div className="w-[400px] relative top-[4rem]">
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

        {/* شماره موبایل */}
       

        <button
          onClick={setlogin}
          className="w-[400px] text-white bg-[#EE2556] h-[50px] text-xl yekan-bold rounded-xl mt-20"
          type="submit"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}