import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		var details = data.find(directory => {
			return directory.id===selectedBuilding
		})
		if(!details)
		{
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		return (
			<div>
				<h4>Details</h4>
				<p>Building Name = {details.name}</p>
				<p>Building Code = {details.code}</p>
				{details.address &&
				<p>Building Address = {details.address}</p>}
				{details.coordinates &&
				<div>
					<p>Building Latitude = {details.coordinates.latitude}</p>
					<p>Building Longitude = {details.coordinates.longitude}</p>
				</div>}
			</div>
		);
	}
}
export default ViewBuilding;
