import React, { useState } from 'react';

interface UserData {
  username: string;
  phone: string;
  code: string;
  rememberMe: boolean;
}

interface CountryCode {
  code: string;
  name: string;
}

const countryCodes: CountryCode[] = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+86', name: 'China' },
  { code: '+81', name: 'Japan' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+7', name: 'Russia' },
  { code: '+55', name: 'Brazil' },
  { code: '+234', name: 'Nigeria' },
  { code: '+27', name: 'South Africa' },
  { code: '+61', name: 'Australia' },
  { code: '+52', name: 'Mexico' },
  { code: '+20', name: 'Egypt' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+82', name: 'South Korea' },
  { code: '+39', name: 'Italy' },
  { code: '+34', name: 'Spain' },
  { code: '+90', name: 'Turkey' },
  { code: '+31', name: 'Netherlands' },
  { code: '+46', name: 'Sweden' },
  { code: '+41', name: 'Switzerland' },
  { code: '+32', name: 'Belgium' },
  { code: '+43', name: 'Austria' },
  { code: '+45', name: 'Denmark' },
  { code: '+47', name: 'Norway' },
  { code: '+358', name: 'Finland' },
  { code: '+48', name: 'Poland' },
  { code: '+380', name: 'Ukraine' },
  { code: '+30', name: 'Greece' },
  { code: '+351', name: 'Portugal' },
  { code: '+353', name: 'Ireland' },
  { code: '+36', name: 'Hungary' },
  { code: '+420', name: 'Czech Republic' },
  { code: '+40', name: 'Romania' },
  { code: '+65', name: 'Singapore' },
  { code: '+60', name: 'Malaysia' },
  { code: '+62', name: 'Indonesia' },
  { code: '+63', name: 'Philippines' },
  { code: '+66', name: 'Thailand' },
  { code: '+84', name: 'Vietnam' },
  { code: '+92', name: 'Pakistan' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+977', name: 'Nepal' },
  { code: '+95', name: 'Myanmar' },
  { code: '+856', name: 'Laos' },
  { code: '+855', name: 'Cambodia' },
  { code: '+250', name: 'Rwanda' },
  // Add more country codes as needed
];

const RegisterStepThree: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    phone: '',
    code: '+1',
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    // Handle form submission
  };

  return (
    <>
        <div className="header">
          <h1 className="text-[#151940] text-[22px] font-semibold mb-2.5">REGISTER</h1>
          <div className="title text-[#151940] text-[18px] mb-5">
            Please enter <span className="font-bold">your phone number</span> and <span className="font-bold">username</span> so we can verify you.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            value={userData.username}
            onChange={handleInputChange}
            className="w-full h-[53.734px] bg-[#F5F6FA] rounded-lg px-5 mb-2.5 outline-none focus:ring-2 focus:ring-[#314BCE] transition duration-300"
          />
          <div className="phone flex justify-between mb-2.5">
            <select
              name="code"
              value={userData.code}
              onChange={handleInputChange}
              className="w-[28%] h-[53.734px] bg-[#F5F6FA] rounded-lg px-2 outline-none text-sm"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              required
              value={userData.phone}
              onChange={handleInputChange}
              className="w-[70%] h-[53.734px] bg-[#F5F6FA] rounded-lg px-5 outline-none focus:ring-2 focus:ring-[#314BCE] transition duration-300"
            />
          </div>
          <div className="accept flex items-center mb-5">
            <input
              type="checkbox"
              name="rememberMe"
              checked={userData.rememberMe}
              onChange={handleInputChange}
              className="mr-2.5"
            />
            <span className="text-[#7F8192] text-[12px]">Remember me</span>
          </div>
          <button type="submit" className="w-full h-[56px] bg-[#AAADB7] rounded-lg text-white text-[18px] font-bold mb-5">
            REGISTER
          </button>
        </form>
    </>
  );
};

export default RegisterStepThree;