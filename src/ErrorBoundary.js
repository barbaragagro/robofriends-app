import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true})
	}

	render () {
		if (this.state.hasError) {
			return <h1>Seems like there is a problem, try again later!</h1>
		}
	}
}

export default ErrorBoundary;