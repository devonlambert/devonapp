import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Home = () => (
    <Layout>
        <h1>Devon's Blog</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Learn Why Next.js is awesome" />
            <PostLink title="Deploy apps with Zeit" />
        </ul>
    </Layout>
);

export default Home;