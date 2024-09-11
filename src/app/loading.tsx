// app/loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-fuchsia-500 dark:border-gray-600"></div>
    </div>
  );
};

export default Loading;
