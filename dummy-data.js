const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/book-collection.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/writer.jpeg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/networking.jpeg',
    isFeatured: true,
  },
];

const DUMMY_BOOKS = [
  {
    id: 'b1',
    title: 'The Engineer\'s Guide to:',
    subtitle: 'Weight Loss',
    description: 'This book will help you lose weight.',
    cover: 'images/weight-loss-book.jpg',
    thumb: 'images/weight-loss-book-thumb.jpg',
    isPublished: true,
  },
  {
    id: 'b2',
    title: 'The Engineer\'s Guide to:',
    subtitle: 'Grilling',
    description: 'This book will help you grill.',
    cover: 'images/grilling-book.jpg',
    thumb: 'images/grilling-book-thumb.jpg',
    isPublished: true,
  },
  {
    id: 'b3',
    title: 'The Engineer\'s Guide to:',
    subtitle: 'Body Building',
    description: 'This book will help you build your body.',
    cover: 'images/body-building-book.jpg',
    thumb: 'images/body-building-book-thumb.jpg',
    isPublished: false,
  },
];

export function getPublishedBooks() {
  return DUMMY_BOOKS.filter((book) => book.isPublished);
}

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllBooks() {
  return DUMMY_BOOKS;
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getBookById(id) {
  return DUMMY_BOOKS.find((book) => book.id === id);
}
