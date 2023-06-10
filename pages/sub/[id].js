import { useRouter } from "next/router";

const SubId = () => {
    const router = useRouter();
    const id = Number(router.query.id);

    return (
        <>
            <h1 className="font-bold text-xl">/pages/sub/[id].js</h1>
            <p>param id: {id}</p>
            <a href="/" className="text-blue-500">/pages/index.js</a>
        </>
    );
};

export default SubId;