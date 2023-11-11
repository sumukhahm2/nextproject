import MeetupList from "@/components/meetups/MeetupList"
import { MongoClient } from "mongodb" 



function HomePage(props){
    
   return (
   <MeetupList meetups={props.meetups}/>
   
   )
}

export async function getStaticProps()
{
   

    const client= await MongoClient.connect('mongodb+srv://Vighnaraj:miSW6zX3iD6Xrgfd@cluster0.ogxnkc8.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()
    const meetupCollections=db.collection('meetups')
    const result=await meetupCollections.find().toArray()

    client.close()
    return { 
        props:{
            meetups:result.map((meetup)=>({
                title:meetup.title,
                description:meetup.description, 
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString()
            }))
        },
        revalidate:100 
    }
}
export default HomePage