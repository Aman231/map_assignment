import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async (url) => {
			setIsLoading(true);
			try {
				const response = await axios.get(url);
				if (isMounted) {
					setData(response.data);
					setFetchError(null);
				}
			} catch (err) {
				if (isMounted) {
					//setFetchError(err.message);
					const mockData = [
						{ id: 1, postal_code: '368219', longitude: 46.9788288, latitude: 42.9612827, place: 'Chirkey' },
						{ id: 2, postal_code: '8712', longitude: 121.29146, latitude: 5.87568, place: 'Kanlagay' },
						{ id: 3, postal_code: '59215-000', longitude: -35.4124355, latitude: -6.4472391, place: 'Nova Cruz' },
						{ id: 4, postal_code: '403930', longitude: 109.799646, latitude: 41.221015, place: 'Xidoupu' },
						{ id: 5, postal_code: '34555 AM', longitude: 105.729085, latitude: 35.963912, place: 'Xieji' },
						{ id: 6, postal_code: '373-0862', longitude: 139.381182, latitude: 36.2569423, place: 'Ōta' },
						{ id: 7, postal_code: '55550-000', longitude: -35.4562795, latitude: -8.7393595, place: 'Água Preta' },
						{ id: 8, postal_code: '4554-99', longitude: 97.7525352, latitude: 4.9623026, place: 'Idi Rayeuk' },
						{ id: 9, postal_code: 'CEE 3455', longitude: 29.83333, latitude: 46.23333, place: 'Kamyshevka Vtoraya' },
						{ id: 10, postal_code: '04004 CEDEX', longitude: 6.1717148, latitude: 44.0527811, place: 'Digne-les-Bains' },
					];
					setData(mockData);
				}
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		fetchData(dataUrl);

		const cleanUp = () => {
			isMounted = false;
		};

		return cleanUp;
	}, [dataUrl]);

	return { data, fetchError, isLoading };
};

export default useAxiosFetch;
