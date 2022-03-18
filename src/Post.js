import { Link } from 'react-router-dom';
import Map from './Map';

const Post = ({ post }) => {
	return (
		<article className="post">
			<div>
				<Link to={`/post/${post.id}`}>
					<h2>{post.place}</h2>
					<p className="postDate">{post.postal_code}</p>
				</Link>
				<p className="postBody">{`Latitude: ${post.latitude}
                Longitude: ${post.longitude}`}</p>
			</div>
			<Map className={'Map'} posts={[post]} zoom={11} />
		</article>
	);
};

export default Post;
