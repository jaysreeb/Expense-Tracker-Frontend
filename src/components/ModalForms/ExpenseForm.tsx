import {Controller, useForm, useWatch} from 'react-hook-form';
import { Checkbox, TextField, Button, } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import z, { boolean } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
// Validation
const schema =z.object({
  category: z.enum(["expense","income"]),
  title: z.string().min(1,"Title is required"),
  amount: z.number().min(1,"Amount must be greater than 0"),
  date:z.date(),
  recurring:z.boolean().optional(),
  frequency:z.string().optional()
})

type FormData =z.infer<typeof schema>;

type ExpenseProps={
  onClose: () => void,
}

export default function ExpenseForm({onClose}: ExpenseProps){
  const{control, handleSubmit, reset, formState:{errors}} = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues:{
      category:"expense",
      title: "",
      amount: 0,
      date: dayjs().toDate(),
      recurring: true,      
      frequency:"",
    },
  })
  // const recurring = watch("recurring");
  const recurring= useWatch({control, name:"recurring"});
  console.log("Recurring value:", recurring, typeof recurring); 

  const onSubmit =(data:FormData) => {
    const stored = JSON.parse(localStorage.getItem("expense")||"[]");
    stored.push(data);
    localStorage.setItem("expense",JSON.stringify(stored));

    console.log("Saved",data);
    alert("Saved");
    reset();
    onClose();
  }

return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='box-content md:box-border font-serif gap-4 size- p-5 grid items-center m-5 rounded-4xl '>
          <h1 className='text-red-600/100'>Fill out your Expenses</h1>
          <Controller
          name="title"
          control={control}
          render={({field}) =>(
            <TextField
            label="Title"
            {...field}
            error={!!errors.title}
            helperText={errors.title?.message}
            />            
            )}
          />
          <Controller
          name="amount"
          control={control}
          render={({field}) =>(
            <TextField 
            label="Amount"
            type='number'
            {...field}
            onChange={(e) => field.onChange(parseFloat(e.target.value)||0)}
            error={!!errors.amount}
            helperText={errors.amount?.message}
            />            
            )}
          />
          <Controller
          name="date"
          control={control}
          render={({field}) =>(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
              label="Date"            
              value={dayjs(field.value)}
              onChange={(newValue) => field.onChange(newValue?.toDate())}
              />
            </LocalizationProvider>                      
            )}
          />
          {errors.date && <p className='text-red-500 text-sm'>{errors.date?.message}</p>}

          <Controller
          name="recurring"
          control={control}
          render={({field}) =>(
            <FormGroup>
              <FormControlLabel 
              control={<Checkbox checked={!!field.value} onChange={(e) => field.onChange(e.target.checked)}/>} label="Recurring" />
            </FormGroup>
            )}
          />
        {recurring && (
          <Controller
              name="frequency"
              control={control}
              render={({field})=>(
                <TextField
                  select
                  id="frequency"
                  value={field.value}
                  label="Frequency"
                  onChange={field.onChange}
                  error={!!errors.frequency}
                  helperText={errors.frequency?.message}
                  fullWidth
                >
                  <MenuItem value={"daily"}>Daily</MenuItem>
                  <MenuItem value={"weekly"}>Weekly</MenuItem>
                  <MenuItem value={"monthly"}>Monthly</MenuItem>
                  <MenuItem value={"annually"}>Annually</MenuItem>
                </TextField>                
          )}
          />
        )}
          <Button size="small" type="submit" variant="contained" fullWidth>Add Expenses</Button>          
        </div>  
      </form>
    </div>
)}




