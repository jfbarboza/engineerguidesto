import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/events-list";
export default function Home() {
  return (
    <>
      <h1>Engineer Guides To</h1>
      <ul>
        <li><Link href="/books">Books</Link></li>
        <li><Link href="/authors">Authors</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <EventsList events={getFeaturedEvents()} />
    </>
  )
}
