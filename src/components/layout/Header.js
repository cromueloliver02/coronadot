import React from 'react';
import CountrySelectForm from '../form/CountrySelectForm';

const Header = () => {
	return (
		<nav className='header bg-light py-2'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<h1 className='logo text-left'>
							<span className='primary-text'>
								<i className='fas fa-virus'></i> Corona
							</span>
							Dot
						</h1>
					</div>
					<div className='col-md-6'>
						<CountrySelectForm />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
