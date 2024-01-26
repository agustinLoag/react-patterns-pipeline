import React, { useState } from 'react'

const WithControllerForm = (Form: unknown, initialState: Record<string,unknown> = {}) => {
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