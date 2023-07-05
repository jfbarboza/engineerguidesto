import { useRouter } from 'next/router';

function BookPage(){
    const router = useRouter();
    console.log(`router: ${router.pathname}`);
    const { id } = router.query;
    console.log(`id: ${id}`);
    return <h1>Book Page for </h1>
}

export default BookPage;