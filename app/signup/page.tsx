import { Form } from "../components/forms/form";


export default function Page() {

    const submitHandler = () => {
        console.log('Form Submitted!')
    }

    return (
        <div>
            Signup Page!
            <Form title="Signup for an account here!" onSubmit={submitHandler}/>
        </div>
    )
}

