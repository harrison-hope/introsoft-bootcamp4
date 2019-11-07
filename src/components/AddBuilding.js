import React from 'react';

class AddBuilding extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;
		var code, name, address, latitude, longitude;
		return (
			<form>
				<input 
					type="text" 
					ref=code
					placeholder="Code" 
					onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		)
	}
}
export default AddBuilding;