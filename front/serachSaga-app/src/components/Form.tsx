import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrInputValue } from "../redux/formSlice";

interface listInterface {
  id?: number;
  name: string;
}

export default function Form() {
  const dispatch = useDispatch();
  const val = useSelector((state: unknown) => state.form.currResponse);

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()    
  }

  const onInput = (ev: FormEvent) => {
    ev.preventDefault()
    if (ev.target.value.trim() === '') {
      return
    }
    const valueToAdd = ev.target.value.trim()
    dispatch(setCurrInputValue({inputValue: valueToAdd}))
  }
  
  return (
    <>
    <p>Введите что-нибудь</p>
    <form onSubmit={onSubmit}>
      <input type="text" onInput={onInput} />
    </form>
    {val.map((el: listInterface, ind: number) => <div key={ind}>{el.name}</div>)}
    </>
  )
}