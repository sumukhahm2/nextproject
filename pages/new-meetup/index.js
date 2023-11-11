
import NewMeetupForm from "@/components/meetups/NewMeetupForm"

import { useRouter } from "next/router"

function NewMeetUp(){

const router=useRouter()
    async function addMeetUpHandler(enteredMeetUpData){
        const response=await fetch('/api/new-meetup',{
          method:'POST',
          body:JSON.stringify(enteredMeetUpData),
          headers:{
             'Content-Type':'application/json'
          }
        })
        const data=await response.json()
      console.log(data)
      router.push('/') 
    }
  return <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
}

export default NewMeetUp