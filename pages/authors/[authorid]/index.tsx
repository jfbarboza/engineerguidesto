import { useRouter } from 'next/router';
function AuthorPage(){
    const router = useRouter();
    function goBack(){
        // go back to the previous page
        router.back();
    }
    return (
        <>
            <h1>Author Page</h1>
            <button onClick={goBack}>Back</button>
        </>
    )
}

export default AuthorPage;