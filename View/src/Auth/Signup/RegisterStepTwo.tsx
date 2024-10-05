import React, { useState } from 'react';

interface UserData {
    password: string;
    confirmPassword: string;
    remember: boolean;
}

interface ErrorFace {
    type: boolean;
    message: string;
}

const RegisterStepTwo: React.FC = () => {
    const [userData, setUserData] = useState<UserData>({
        password: '',
        confirmPassword: '',
        remember: false,
    });
    const [error, setError] = useState<ErrorFace>({
        type: false,
        message: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            setError({
                type: true,
                message: 'Passwords are not match!'
            })
        } else if ((userData.password)?.length < 8) {
            setError({
                type: true,
                message: 'Password is too small try up to 8 characters!'
            })
        }
        console.log(userData);
        // Navigate to next step (implement based on your routing setup)
    };

    return (
        <>
            <div className="flex flex-col">
                <h1 className="text-[22px] font-semibold text-[#151940] mb-2.5">REGISTER</h1>
                <div className="text-[18px] text-[#151940] mb-5">
                    Please enter <span className="font-bold">Password</span> and <span className="font-bold">Confirm It</span> to secure your NotifyAccount.
                </div>
            </div>

            {error.type && (
                <div className="w-full h-[53px] bg-red-400 rounded-[5px] flex items-center justify-center text-[14px] font-medium text-[#fff] tracking-[2.55px]">{error.message}</div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-2.5">
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="names"
                    required
                    value={userData.password}
                    onChange={handleInputChange}
                    className="w-full h-[53.734px] rounded-lg bg-[#F5F6FA] px-5 outline-none focus:ring-2 focus:ring-[#314BCE] transition-all duration-300"
                />
                <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    name="email"
                    required
                    value={userData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full h-[53.734px] rounded-lg bg-[#F5F6FA] px-5 outline-none focus:ring-2 focus:ring-[#314BCE] transition-all duration-300"
                />
                <div className="flex items-center text-[12px] text-[#7F8192]">
                    <input
                        type="checkbox"
                        name="terms"
                        checked={userData.remember}
                        onChange={handleInputChange}
                        className="mr-2.5"
                    />Remmber Me
                </div>
                <button type="submit" className="w-full h-14 bg-[#AAADB7] rounded-lg text-white text-lg font-bold mt-5">CONTINUE</button>
            </form>

        </>
    );
};

export default RegisterStepTwo;