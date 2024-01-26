/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from 'react'

interface FormProps {
  formValues: Record<string, any>;
  handleChange: (val: unknown, key: string) => void;
  children: ReactNode;
}

const WithControllerForm = (Form: React.FC<FormProps>, initialState: Record<string,any> = {}) => {
    const ControlledForm = () => { 
        const [formValues, setFormValues] = useState(initialState)
        const handleChange = (val: unknown, key: string) => { 
            setFormValues({...formValues, [key]: val})
         }

         return (
            <Form formValues={formValues} handleChange={handleChange}>WithControllerForm</Form>
          )
     }
  return ControlledForm;
}

export default WithControllerForm