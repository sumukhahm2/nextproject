import MeetupList from "@/components/meetups/MeetupList"


export const DUMMY_MEETUPS=[

    {
        id:'m1',
        title:'A First Meetup',
        image:'https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-T-compressed.jpg',
        address:'some address5 some 12345 street some city',
        description:'This is First Meetup'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Taj-Mahal-Agra-feature.jpg',
        address:'some address5 some 12345 street some city',
        description:'This is Second Meetup'
    },
    {
        id:'m3',
        title:'A Third Meetup',
        image:'https://www.thomascook.in/blog/wp-content/uploads/2018/04/placestovisitinindiablog.jpg',
        address:'some address5 some 12345 street some city',
        description:'This is Third Meetup'
    },
]

function HomePage(){
   return (
   <MeetupList meetups={DUMMY_MEETUPS}/>
   
   )
}

export async function getStaticProps()
{
    return {
        props:{
            meetups:DUMMY_MEETUPS
        },
        revalidate:100 
    }
}
export default HomePage