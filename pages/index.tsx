import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/events-list";
import Button from "@/components/ui/button";
import classes from "./index.module.css";
export default function Home() {
  return (
    <>
      <section className={classes.main}>
        <div className={classes.content}>
          <div className={classes.image}>
            <img src="/images/smart-people.png" alt="smart people" />
          </div>
          <div>
            <h1>The guide books for <span className={classes.underline}>smart</span> people.</h1>
            <Button link="/books" color="blue">Browse Books</Button>
          </div>
        </div>
        
      </section>

      <EventsList events={getFeaturedEvents()} />
    </>
  )
}
