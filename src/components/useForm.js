import { useState } from 'react';

const useForm = (callback, validate) => {
    const [ values, setValues ] = useState({FirstName: '', LastName: '', Username: '', Email: '', Password: ''});
    const [ errors, setErrors ] = useState({Email: '',Password: ''})
    
        const handleChange = (event) => {
        
          const { name, value } = event.target;
          setValues({...values, [name]: value})
        }
        const handleSubmit = event => {
          event.preventDefault();
            setErrors(validate(values))
          callback();
        }
        return {
            values,
            handleChange,
            handleSubmit,
            errors
        }
}

export default useForm;