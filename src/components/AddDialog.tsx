// import {Controller, useForm, type SubmitHandler, useWatch} from 'react-hook-form';
import { RadioGroup, } from '@mui/material';
import Radio from '@mui/material/Radio';
import Dialog from '@mui/material/Dialog';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpenseForm from '../components/ModalForms/ExpenseForm.tsx'
import IncomeForm from '../components/ModalForms/IncomeForm.tsx';
import { useState } from 'react';

// type FormData = {
//   category:"expense"|"income";
// }

type AddDialogProps = {
  open: boolean;
  onClose: () => void;
}

export default function AddDialog({open, onClose}: AddDialogProps) {
  // const {handleSubmit,control, formState:{errors}}= useForm<FormData>({
  //   defaultValues:
  //   { 
  //     category: "expense",
  //   }
  // });
  // const categoryType= useWatch({control, name:"category"});
  // console.log(categoryType);
  const [categoryType, setCategoryType] = useState<"expense"|"income">("expense");
  // const onSubmit:SubmitHandler<FormData> =(data:FormData) =>{
  //   console.log(data);
  //   console.log(errors);
  // };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className='font-serif flex items-center justify-center m-3'>
        <RadioGroup
        value={categoryType}
        onChange={(e)=> setCategoryType(e.target.value as "expense"|"income")}
        row>
          <FormControlLabel value="expense" control={<Radio/>} label="Expense"/>
          <FormControlLabel value="income" control={<Radio/>} label="Income"/>
        </RadioGroup>
      </div>
        {categoryType === "expense"?
        (<ExpenseForm onClose={onClose}/>)
        :(<IncomeForm onClose={onClose}/>)}
    </Dialog>
  )
}
