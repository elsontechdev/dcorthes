import { useState, ChangeEvent, FormEvent } from 'react';

interface FormValues {
  nome: string;
  celular: string;
  cpf:string,
  estado:string,
  email:string,
  idade:number,
  privacidade:boolean,
  promocoes: boolean;
}

interface UseFormResult {
  values: FormValues;
  // handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  resetForm: () => void;
}

function useForm(initialValues: FormValues = {} as FormValues): UseFormResult {
  const [values, setValues] = useState<FormValues>(initialValues);

  




  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
  
    setValues({
      ...values,
      [name]: value,
    });
  };
  

  // const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   // You can add your form submission logic here
  // };


  const resetForm = (): void => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
    // handleSubmit,
  };
}

export default useForm;
