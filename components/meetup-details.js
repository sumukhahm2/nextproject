const { default: Card } = require("./ui/Card");
import classes from './meetups/MeetupItem.module.css'
import { DUMMY_MEETUPS } from '@/pages';
function MeetUpDetails(props){
      const items=DUMMY_MEETUPS.filter((obj)=> obj.id===props.item)
      console.log(items[0])
    return(
        <Card>
            <div className={classes.image}>
          <img src={items[0].image} alt={items[0].title} />
        </div>
        <div className={classes.content}>
          <h3>{items[0].title}</h3>
          <address>{items.address}</address>
        </div>
        </Card>
    )
}

export default MeetUpDetails