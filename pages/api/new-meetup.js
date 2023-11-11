
import {MongoClient} from 'mongodb'


async function handler(req,res){
   console.log('useeffect')
   if(req.method==='POST')
   {
    const data=req.body
    //const {title,image,address,description}=data;

    const client= await MongoClient.connect('mongodb+srv://Vighnaraj:miSW6zX3iD6Xrgfd@cluster0.ogxnkc8.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()
    const meetupCollections=db.collection('meetups')  
    const result=await meetupCollections.insertOne(data)  

    client.close() 
    res.status(201).json({message:'Meetup Inserted!'})
   }
   
}

export default handler