// Imports
import React from 'react';

// Define Environment type
interface Environment {
  _id: string;
  name: string;
}

// Define props for environment component
interface EnvironmentProps {
  environment: Environment;
}

// Environment
const Environment: React.FC<EnvironmentProps> = ({ environment }) => {
  return (
    <div className="environment">
      <h2>{environment.name}</h2>
      {/* Display other environment info here */}
    </div>
  );
}

// Export
export default Environment;
