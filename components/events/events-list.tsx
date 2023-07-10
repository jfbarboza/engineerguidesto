import { EventItemType } from "../../core/types";
import EventItem from "./event-item";
import classes from './event-list.module.css';
function EventsList(props: any){
    const { events } = props;
    return (
        <ul className={classes.list}>
            {events.map((event: EventItemType) => (
                <EventItem 
                    id={event.id} 
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    isFeatured={event.isFeatured}
                    key={event.id}/>
            ))}
        </ul>
    )    
}

export default EventsList;