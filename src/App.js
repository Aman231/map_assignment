import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Missing from './Missing';
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import MapView from './MapView';
import ListView from './ListView';

function App() {
	return (
		<div className="App">
			<Header title="Postal Info" />
			<DataProvider>
				<Nav />
				<Switch>
					<Route exact path="/" component={ListView} />
					<Route exact path="/post" component={MapView} />
					<Route path="/post/:id" component={MapView} />
					<Route path="/about" component={About} />
					<Route path="*" component={Missing} />
				</Switch>
			</DataProvider>
			<Footer />
		</div>
	);
}

export default App;
