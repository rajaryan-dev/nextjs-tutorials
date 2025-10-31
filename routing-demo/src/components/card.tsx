export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-24 m-2 bg-white border border-gray-200 shadow-md rounded-xl flex justify-center items-center hover:shadow-xl transition-shadow">
      {children}
    </div>
  );
};
