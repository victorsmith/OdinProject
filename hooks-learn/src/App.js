import React, { useState, useEffect } from 'react';

const App = () => {
	const [color, setColor] = useState('blue');

	useEffect(() => {
		const changeColorOnClick = () => {
			if (color === 'black') {
				setColor('red');
			} else {
				setColor('black');
			}
		};
		document.addEventListener('click', changeColorOnClick);
  
		return () => {
      document.removeEventListener('click', changeColorOnClick);
		};
	}, [color]);

	return (
		<div>
			<div
				id="myDiv"
				style={{
					color: 'white',
					width: '100%',
					height: '50vh',
					backgroundColor: color,
				}}
			>
				This div can change color. Click on me!
			</div>
		</div>
	);
};

export default App;
