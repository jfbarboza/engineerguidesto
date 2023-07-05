import { useRouter } from 'next/router';

function NewsPageLists(){
    const router = useRouter();
    console.log(`router: ${ router.query.slug }`);
    return <h1>The News Page List</h1>
}

export default NewsPageLists;