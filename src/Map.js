import React from 'react';
import GoogleMapReact from 'google-map-react';
const K_WIDTH = 40;
const K_HEIGHT = 40;

const DEFAULT_CENTER = {
	lat: 34.81855942542896,
	lng: 66.02703537132442,
};

const Map = ({ applyHeight, zoom, posts }) => {
	const highLight =
		posts.length === 1
			? {
					transform: 'scale(1.1)',
					filter: 'brightness(120%)',
					border: '5px solid blue',
			  }
			: {};

	const height = applyHeight ? '100%' : 'calc(100%-1px)';
	//somehow maps dont render without height calc

	return (
		<div style={{ width: '100%', height, position: 'relative' }}>
			<GoogleMapReact
				center={
					posts.length == 1
						? {
								lat: posts[0].latitude,
								lng: posts[0].longitude,
						  }
						: DEFAULT_CENTER
				}
				bootstrapURLKeys={{ key: 'AIzaSyDGyA6gATo09SRCy8DwUxJdBPuxD_xRuQE' }}
				defaultZoom={1}
				zoom={zoom}
			>
				{posts.map((post) => (
					<p
						style={{
							position: 'absolute',
							width: K_WIDTH,
							height: K_HEIGHT,
							left: -K_WIDTH / 2,
							top: -K_HEIGHT / 2,

							border: '5px solid #f44336',
							borderRadius: K_HEIGHT,
							backgroundColor: 'white',
							textAlign: 'center',
							color: '#3f51b5',
							fontSize: 16,
							fontWeight: 'bold',
							padding: 4,
							...highLight,
						}}
						lat={post.latitude}
						lng={post.longitude}
						text={post.place}
					/>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
