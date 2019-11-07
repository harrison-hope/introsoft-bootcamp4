import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, removeBuilding } = this.props;
		return (
			<form>
				<input 
					type="button" 
					value="Delete" 
					onClick={() => removeBuilding()}
				/>
			</form>
		)
	}
}
export default RemoveBuilding;