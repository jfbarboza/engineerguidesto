import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/events-list";
import Button from "@/components/ui/button";
import classes from "./index.module.css";
import path from 'path';
import fs from 'fs/promises';

export default function Home(props: any) {
  const { featuredEvents } = props;
  
  return (
    <>
      <section className={classes.main}>
        <div className={classes.content}>
          <div className={classes.image}>
            <img src="/images/smart-people.png" alt="smart people - Image by syarifahbrit on Freepik" />
          </div>
          <div>
            <h1><span className={classes.underline}>Easy</span> guide books for <span className={classes.underline}>smart</span> people.</h1>
            <Button link="/books" color="blue">Browse Books</Button>
          </div>
        </div>
        
      </section>
      <section>
        <div className={classes.row}>
          <div className={classes.col4}>
            <img src="/images/light-bulb.png" alt="weight loss - Image by freepik" />
          </div>
          <div className={classes.col8}>
            <h1>What are The Engineer&apos;s Guides To?</h1>
            <p>A book series designed for intellectually curious individuals seeking in-depth knowledge on various topics, from weight loss to grilling and beyond. Written with the discerning reader in mind, this series goes beyond the basics, catering to those who consider themselves a bit smarter than a "Dummy."</p>
            <Button link="/about">Learn More</Button>
          </div>
        </div>
      </section>

      <EventsList events={featuredEvents} />
    </>
  )
}

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), 'dummy-data-events.json');
  const jsonData = await fs.readFile(filepath, 'utf8');
  const data = JSON.parse(jsonData);
  const featuredEvents = await data;

  return {
    props: {
      featuredEvents
    },
    revalidate: 1800
  }
}
