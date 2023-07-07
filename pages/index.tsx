import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/events-list";
import Button from "@/components/ui/button";
import classes from "./index.module.css";
export default function Home() {
  return (
    <>
      <section className={classes.main}>
        <div>
          <h1>The guide books for smart people.</h1>
          <Button link="/books" color="blue">Browse Books</Button>
        </div>
        
      </section>

      <EventsList events={getFeaturedEvents()} />
    </>
  )
}
