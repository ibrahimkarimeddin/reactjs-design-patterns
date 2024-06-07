import React from 'react';
import ReactDOM from 'react-dom';
import Shape from './Shape';

const App: React.FC = () => {
    const shapes: JSX.Element[] = [];
    const colors = ['red', 'green', 'blue', 'yellow'];
    const sizes = [50, 60, 70, 80];

    for (let i = 0; i < 1000; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const position = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };
        const flyweight = shapeFlyweightFactory.getFlyweight(color, size);
        
        shapes.push(<Shape key={i} flyweight={flyweight} position={position} />);
    }

    return (
        <div>
            {shapes}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
