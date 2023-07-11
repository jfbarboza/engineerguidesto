import classes from './about.module.css';
import { Fragment } from 'react';
import BooksCarousel from "@/components/books/books-carousel/books-carousel";
import { getAllBooks } from "../dummy-data";
export default function Home() {
    return (
      <Fragment>
        <div className={classes.page_title}>
          <div className={classes.about_content}>
            <h1>About Us</h1>
          </div>
        </div>
        <div className={classes.about_content}>
          <h1 className={classes.align_left}>What is an Engineer Guide?</h1>
          <p>
          The Engineer&apos;s Guide is a book series designed for intellectually curious individuals seeking in-depth knowledge on various topics, from weight loss to grilling and beyond. Written with the discerning reader in mind, this series goes beyond the basics, catering to those who consider themselves a bit smarter than a &quot;Dummy.&quot;
          </p>
          <BooksCarousel books={getAllBooks()}/>
          <div className={classes.questions_section}>
            <h2 className={classes.align_left}>How does this guides work?</h2>
            <p>
            With a focus on practicality and precision, each book in this series combines the analytical mindset of an engineer with comprehensive expertise, offering you a unique approach to mastering the subject at hand. Through clear explanations, scientific principles, and actionable insights, you&apos;ll delve into the intricacies of the topic and gain a deeper understanding that goes beyond surface-level knowledge.
            </p>
            <h2 className={classes.align_right}>What makes this guides different?</h2>
            <p>
            What sets The Engineer&apos;s Guide To apart is its commitment to delivering practical solutions and strategies, backed by evidence-based research. From advanced techniques to expert tips, you&apos;ll find everything you need to tackle the challenges and excel in your chosen field. Whether you&apos;re a novice looking to build a solid foundation or a seasoned enthusiast seeking to refine your skills, this series caters to all levels of expertise.
            </p> 
            <h2 className={classes.align_left}>Who is the engineer?</h2>
            <p>
            Who&apos;s the genius mind behind this book you asked? C&apos;mon! I am not a genius, I am merely and obsesive compulsive computer engineer who loves to learn and share knowledge. I am a father of two, a husband, a son, a brother, a friend, a colleague, a mentor, a mentee, a student, a teacher, a leader, a follower, a dreamer, a Latin Grammy award winner, a doer, a thinker, a web developer, an IT manager, a grill afficionado, a former almost obese man, a writer, a reader, a swimmer, a camper, a traveler, a boy scout, a cloud engineer, a reader and a writer among other things. My name is Jorge Barboza, and hopefully, I won&apos;t be alone in the huge task of sharing knowledge, the idea is that other engineers join me and use this platform to share with you how they implement their craft as engineer to solve common and uncommon problems.
            </p> 
          </div>
        </div>
      </Fragment>
    )
  }
  