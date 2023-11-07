import MeetUpDetails from "@/components/meetup-details"
import { useRouter } from "next/router"
function Details(){
    const router=useRouter()
    const value=router.query.meetupid
    console.log(value)
   return <MeetUpDetails item={value}/>
}

export default Details