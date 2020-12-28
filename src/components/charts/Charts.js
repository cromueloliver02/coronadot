import React, { Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Line, Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chart = ({
	chart: { infected, recovered, deaths, barChart, loading }
}) => {
	if (loading || (infected === null && barChart === null)) {
		return <Spinner />;
	}

	return (
		<div className='chart py-5'>
			<div className='container'>
				{infected !== null &&
				recovered !== null &&
				deaths !== null &&
				barChart === null ? (
					<Fragment>
						<h3>Cases for the past 2 months</h3>
						<div className='row mb-5'>
							<div className='col-md-6'>
								<Line
									data={infected}
									height={200}
									options={{ maintainAspectRatio: true }}
								/>
							</div>
							<div className='col-md-6'>
								<Line
									data={recovered}
									height={200}
									options={{ maintainAspectRatio: true }}
								/>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-6 offset-md-3'>
								<Line
									data={deaths}
									height={200}
									options={{ maintainAspectRatio: true }}
								/>
							</div>
						</div>
					</Fragment>
				) : (
					<Fragment>
						<Bar
							data={barChart}
							options={{
								maintainAspectRatio: true,
								legend: { display: false }
							}}
						/>
					</Fragment>
				)}
			</div>
		</div>
	);
};

Chart.propTypes = {
	chart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	chart: state.chart
});

export default connect(mapStateToProps)(Chart);