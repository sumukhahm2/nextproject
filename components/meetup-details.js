const { default: Card } = require("./ui/Card");
import classes from './meetups/MeetupItem.module.css'
function MeetUpDetails(props){
     console.log(props.item)
    return(
        <Card>
            <div className={classes.image}>
          <img src={props.item.image} alt={props.item.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.item.title}</h3>
          <address>{props.item.address}</address>
        </div>
        </Card>
    )
}

export default MeetUpDetails