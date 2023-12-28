import { createContext, useState } from "react";

const RegisterContext = createContext(null);

const RegisterProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    levelExperience: "",
    password: "",
    confirmPassword: "",
    username: "",
    selectProgram: "",
    address: "",
    country: "",
    city: "",
    comment: "",
    study: "",
    emailUpdate: false,
  });

  return (
    <RegisterContext.Provider value={{ setData, data, setStep, step }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterContext;
export { RegisterProvider };