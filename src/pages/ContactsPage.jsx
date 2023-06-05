import { useEffect, useState } from "react"
import Contacts from "../components/Contacts"
import ContactsPlaceholder from "../components/ContactsPlaceholder"


const ContactsPage = ({status}) => {
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])
  return (
    <div className='h-[100vh] flex flex-row items-center justify-center relative ' id='contacts'>
        <div className="flex flex-col items-center justify-center">
            <h2 className='text-4xl font-semibold p-2 text-center pb-2'>Свяжись co мной:</h2>
            {!show ? <Contacts /> : <ContactsPlaceholder />}
        </div>
    </div>
  )
}

export default ContactsPage