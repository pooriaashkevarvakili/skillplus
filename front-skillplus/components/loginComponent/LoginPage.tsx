import { TextInput } from "flowbite-react";
import { useState } from "react";
import instance from "@/axios/axios";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";
import laptop from "@/public/Images/laptop.png";
import Image from "next/image";

interface FormErrors {
  email: string;
  password: string;
  username: string;
}
export default function Signup() {
  const [isStarMode, setIsStarMode] = useState(true);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [inputColor, setInputColor] = useState("");
  const [id, setId] = useState("");
  const [family, setFamily] = useState<string>();
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
    username: "",
  });

  const validateField = (fieldName: keyof FormErrors, value: string): string => {
    switch (fieldName) {
      case "email":
        return !value ? "ایمیل را وارد کنید" : "";
      case "password":
        return !value ? "کلمه عبور را وارد کنید" : "";
      case "username":
        return !value ? "نام کاربری را وارد کنید" : "";
      default:
        return "";
    }
  };

  const handleInputChange = (
    fieldName: keyof typeof errors,
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
    const error = validateField(fieldName, value);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
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
  // ... سایر state ها و توابع ...

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* بخش فرم */}
      <div className="flex-1 bg-white px-4 py-8 md:p-12">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl yekan-bold">ورود  </h1>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            setlogin();
          }} className="space-y-7">
            {/* فیلد ایمیل */}
            <div dir="rtl" className="relative">
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

            {/* فیلد نام کاربری */}
            <div dir="rtl" className="relative">
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

            {/* فیلد رمز عبور */}
            <div dir="rtl" className="relative ">
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
                className="absolute left-full left-[15px] top-1/2 -translate-y-1/2 cursor-pointer"
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

<button
              onClick={setlogin}
              className="w-full bg-[#EE2556]  h-[50px] text-white text-xl yekan-bold rounded-xl hover:bg-[#d41f44]"
              type="submit"
            >
              ورود
            </button>

            {/* دکمه ورود */}
          
          </form>
        </div>
      </div>

      {/* بخش تصویر */}
      <div className="hidden md:flex flex-1 bg-[#EF2D64] items-center justify-center">
        <Image
          alt="لپ‌تاپ"
          src={laptop}
          className="max-w-[80%] max-h-[80vh] object-cover"
          priority
        />
      </div>
    </div>
  );
}