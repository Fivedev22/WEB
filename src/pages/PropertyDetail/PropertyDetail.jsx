import { useState } from 'react';
import { useParams } from 'react-router-dom';

// files
import data from '../../data/db.json'


const PropertyDetail = () => {

	const { key } = useParams();
	const { properties } = data


	const oneProperty = properties.find(
		(property) => property.ref == String(`${key}`)
	);

	const [images, setImages] = useState(oneProperty.images)

	return <div>
		{oneProperty.name}
		<div>
			{
				images.map(img => (
					<img src={img} />
				))
			}
		</div>
	</div>;
};

export default PropertyDetail;
