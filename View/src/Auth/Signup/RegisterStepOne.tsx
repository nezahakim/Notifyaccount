import React, { useState } from 'react';

interface UserData {
  names: string;
  email: string;
  terms: boolean;
}

const RegisterStepOne: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    names: '',
    email: '',
    terms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    // Navigate to next step (implement based on your routing setup)
  };

  return (<>

    <div className="flex flex-col">
      <h1 className="text-[22px] font-semibold text-[#151940] mb-2.5">REGISTER</h1>
      <div className="text-[18px] text-[#151940] mb-5">
        Please enter <span className="font-bold">Full name</span> and <span className="font-bold">Email Address </span> so we can verify you.
      </div>
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2.5">
      <input
        type="text"
        placeholder="Full name"
        name="names"
        required
        value={userData.names}
        onChange={handleInputChange}
        className="w-full h-[53.734px] rounded-lg bg-[#F5F6FA] px-5 outline-none focus:ring-2 focus:ring-[#314BCE] transition-all duration-300"
      />
      <input
        type="email"
        placeholder="Enter Email Address"
        name="email"
        required
        value={userData.email}
        onChange={handleInputChange}
        className="w-full h-[53.734px] rounded-lg bg-[#F5F6FA] px-5 outline-none focus:ring-2 focus:ring-[#314BCE] transition-all duration-300"
      />
      <div className="flex items-center text-[12px] text-[#7F8192]">
        <input
          type="checkbox"
          name="terms"
          checked={userData.terms}
          onChange={handleInputChange}
          className="mr-2.5"
        />
        I've read and Agree to the terms of privacy policy
      </div>
      <button type="submit" className="w-full h-14 bg-[#AAADB7] rounded-lg text-white text-lg font-bold mt-5">CONTINUE</button>
    </form>

  </>
  );
};

export default RegisterStepOne;