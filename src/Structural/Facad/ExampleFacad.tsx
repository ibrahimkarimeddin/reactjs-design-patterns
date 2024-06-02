import { useMediaQuery } from ".";

function ExampleFacad() {
    const currentMediaQuery = useMediaQuery();
  
    return (
      <div>
        <h1>Responsive Design</h1>
        <p>Current Media Query: {currentMediaQuery}</p>
      </div>
    );
  };
  
  export default ExampleFacad;