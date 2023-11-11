import MeetUpDetails from "@/components/meetup-details"
import { useRouter } from "next/router"
import { MongoClient, ObjectId } from "mongodb"
//import { ObjectId } from "mongodb"
function Details(props){
    const router=useRouter()
    const value=router.query.meetupid
    //console.log(value)
   return <MeetUpDetails item={props.meetupData}/>
}

export async function getStaticPaths(){
    return{
        fallback:true,
         paths:[
             {
                params:{
                    meetupid:'654c5974dbf8016a4e84dbeb'
                }
            },
            {
                params:{
                    meetupid:'654c75eadbf8016a4e84dbec'
                }
            }
         ]
    }
}
export async function getStaticProps(context){

    const id=context.params.meetupid
    const client= await MongoClient.connect('mongodb+srv://Vighnaraj:miSW6zX3iD6Xrgfd@cluster0.ogxnkc8.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()
    const meetupCollections=db.collection('meetups')
   
    const result=await meetupCollections.findOne({_id:new ObjectId(id)})  
     
    client.close()   
    console.log(result)
    return {
        props:{
            meetupData:{ 
                image:result.image, 
                id:id,
                title:result.title,
                address:result.address,
                description:result.description
            }
        }
    }
}
export default Details