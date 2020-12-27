import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
	return (
		<img
			src={spinner}
			alt='Loading...'
			className='img-fluid d-block m-auto'
			style={{ width: '200px' }}
		/>
	);
};

export default Spinner;
