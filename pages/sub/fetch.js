import { useEffect, useState } from "react";

const SubFetch = () => {
    const [user, setUser] = useState({ name: null });

    useEffect(() => {
        const fetchHello = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "api/hello");
            const data = await response.json();

            setUser(data);
        };

        fetchHello();
    }, []);

    return (
        <>
            <h1 className="font-bold text-xl">/pages/sub/fetch.js</h1>
            <p>{user.name}</p>
            <a href="/" className="text-blue-500">/pages/index.js</a>
        </>
    );
};

export default SubFetch;