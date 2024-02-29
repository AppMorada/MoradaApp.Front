import React from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import Input from './input';

interface PasswordInputProps {
   showPassword: boolean;
   passwordShow: () => void;
   register: any; 
   errors: any; 
}

const PasswordInput: React.FC<PasswordInputProps> = ({ showPassword, passwordShow, register, errors }) => {
   return (
      <div className="relative">
         <Input
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Insira sua senha"
            register={register}
            error={errors.password?.message}
         />
         <div className="absolute right-5 top-6 cursor-pointer" onClick={passwordShow}>
            {showPassword ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
         </div>
      </div>
   );
};

export default PasswordInput;
