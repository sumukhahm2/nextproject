import MeetUpDetails from "@/components/meetup-details"
import { useRouter } from "next/router"
function Details(){
    const router=useRouter()
    const value=router.query.meetupid
    console.log(value)
   return <MeetUpDetails item={value}/>
}

export async function getStaticPaths(){
    return{
        fallback:false,
         paths:[
             {
                params:{
                    meetupid:'m1'
                }
            },
            {
                params:{
                    meetupid:'m2'
                }
            },
            {
                params:{
                    meetupid:'m3'
                }
            }
         ]
    }
}
export async function getStaticProps(context){

    const id=context.params.meetupid
    return {
        props:{
            meetupData:{
                image:'https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-T-compressed.jpg',
                id:id,
                title:'A First Meetup',
                address:'some address5 some 12345 street some city',
                description:'This is First Meetup'
            }
        }
    }
}
export default Details