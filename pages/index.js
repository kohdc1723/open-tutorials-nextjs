const Home = () => {
    return (
        <div>
            <h1 className="text-xl font-bold">/pages/index.js</h1>
            <ul className="text-blue-500">
                <li>
                    <a href="/sub">/pages/sub/index.js</a>
                </li>
                <li>
                    <a href="/sub/about">/pages/sub/about.js</a>
                </li>
                <li>
                    <a href="/sub/1">/pages/sub/1.js</a>
                </li>
                <li>
                    <a href="/sub/2">/pages/sub/2.js</a>
                </li>
                <li>
                    <a href="/sub/fetch">/pages/sub/fetch.js</a>
                </li>
            </ul>
        </div>
    );
};

export default Home;