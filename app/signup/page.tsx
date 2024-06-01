import { Form } from "../components/forms/Form";
import { NavBar } from "../components/nav-bar/NavBar";
import { LinkItem } from "../interfaces/LinkItem";


export default function Page() {

    const submitHandler = () => {
        console.log('Form Submitted!')
    }

    const testNavs: LinkItem[] = [
        {
            title: "Google",
            href: "google.com",
            priority: 1
        },
        {
            title: "FaceBook",
            href: "adsadasd",
            priority: 2,
        },
        {
            title: "instagram",
            href: "asdadad",
            priority: 2
        }
    ]

    return (
        <div>
            <NavBar links={testNavs}/>
            Signup Page!
            {/* <Form title="Signup for an account here!" onSubmit={submitHandler}/> */}
        </div>
    )
}

