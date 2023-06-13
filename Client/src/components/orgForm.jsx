
import React from "react";
import { useState } from "react";
const OrgForm = ()=>{

    const [formData, setFormData] = useState({
        OrganizationName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        state: "",
        city: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
      };
      const title= "First Name";
    
    return(
        <>
        
        
        </>
    );
};
export default OrgForm;