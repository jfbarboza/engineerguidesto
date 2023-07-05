import Link from "next/link";

function AuthorsPage(){
    const authors = [
        { id: 'jorgebarboza', name: "Jorge Barboza" },
        { id: 'jesusgonzalez', name: "Jesus Gonzalez" },
    ];
    return (
        <>
            <h1>Authors Page</h1>
            <ul>
                {authors.map(author => {
                    return (<li key={author.id}>
                        <Link href={{
                            pathname: '/authors/[authorid]',
                            query: { authorid: author.id }
                        }}>{author.name}</Link>
                    </li>);
                })}
            </ul>
        </>
    );
}

export default AuthorsPage;