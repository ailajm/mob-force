// Imports
import React from 'react';

// Define Environment type
interface Environment {
  _id: string;
  name: string;
}

// Define props for environment component
interface EnvironmentProps {
  environment: Environment | null; // The environment can be null
}

// Environment
const Environment: React.FC<EnvironmentProps> = ({ environment }) => {
  // Check if environment exists
  if (!environment) {
    return (
      <div className="environment">
        <h2>Environment not found.</h2>
      </div>
    );
  }

  return (
    <div className="environment">
      <h2>{environment.name}</h2>
    </div>
  );
}

// Export
export default Environment;
