import { Link } from "react-router-dom"

export default function AllPost(props) {
    const loaded = () => {
        return props.post.map((post) => (
            <div key={post._id} className="post">
                <Link to={`/allpost/${post._id}`}><img src={post.image_url} alt={post.slocation} /></Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return props.post ? loaded() : loading()
} 