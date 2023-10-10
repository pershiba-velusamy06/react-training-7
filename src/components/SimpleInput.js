import { useRef, useState } from 'react'

const SimpleInput = (props) => {
  const inputRef = useRef()
  const [enteredName, setenteredName] = useState("")
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  const nameInputHandler = (e) => {
    setenteredName(e.target.value)
    setEnteredNameIsValid(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
    // const enteredValue=inputRef.current.value;
    // console.log(enteredValue)
    setenteredName('')
  }

  const formControlClass= enteredNameIsValid?'form-control':'form-control invalid';
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={formControlClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' value={enteredName} onChange={(e) => nameInputHandler(e)} />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
