import React from 'react';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import InfectedCard from './InfectedCard';
import RecoveredCard from './RecoveredCard';
import DeathsCard from './DeathsCard';
import ActiveCard from './ActiveCard';
import PropTypes from 'prop-types';

const Results = ({ corona: { country, loading } }) => {
	if (country === null || loading) {
		return <Spinner />;
	}

	const {
		cases,
		todayCases,
		recovered,
		todayRecovered,
		deaths,
		todayDeaths,
		active,
		critical,
		tests
	} = country;

	return (
		<section className='cards py-3'>
			<div className='container'>
				<div className='row'>
					<InfectedCard cases={cases} todayCases={todayCases} />
					<RecoveredCard
						recovered={recovered}
						todayRecovered={todayRecovered}
					/>
					<DeathsCard deaths={deaths} todayDeaths={todayDeaths} />
					<ActiveCard active={active} critical={critical} tests={tests} />
				</div>
			</div>
		</section>
	);
};

Results.propTypes = {
	corona: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	corona: state.corona
});

export default connect(mapStateToProps)(Results);
