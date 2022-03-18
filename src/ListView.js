import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const ListView = () => {
	const { searchResults, fetchError, isLoading } = useContext(DataContext);

	return (
		<main className="ListView">
			{isLoading && <p className="statusMsg">Loading posts...</p>}
			{!isLoading && fetchError && (
				<p className="statusMsg" style={{ color: 'red' }}>
					{fetchError}
				</p>
			)}
			{!isLoading &&
				!fetchError &&
				(searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMsg">No places to display.</p>)}
		</main>
	);
};

export default ListView;
