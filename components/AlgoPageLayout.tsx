import React from "react";

interface Props {
  algorithmTitle: string;
}

const AlgoPageLayout: React.FC<Props> = ({ algorithmTitle, children }) => {
  return (
    <div className="w-screen bg-red-100">
      <div className="flex flex-col my-4 w-11/12 mx-auto p-4 bg-blue-200">
        <h1 className="m-auto border-b-2 border-black px-10 py-4 tex-center text-5xl">
          {algorithmTitle}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AlgoPageLayout;
