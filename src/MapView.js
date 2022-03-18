import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from './context/DataContext';
import Map from './Map';

const MapView = () => {
	const { searchResults, posts } = useContext(DataContext);
	const { id } = useParams();

	const searchProps = {
		posts: searchResults,
		zoom: 10 - searchResults.length,
	};

	const postProps = {
		posts: posts.filter((post) => post.id.toString() === id),
		zoom: 11,
	};

	const restProps = id ? postProps : searchProps;

	return (
		<main className="MapView">
			<Map applyHeight {...restProps} />
		</main>
	);
};

export default MapView;
