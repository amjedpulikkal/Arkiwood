
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900" />
      <span className="ml-4">Loading dashboard...</span>
    </div>
  );
}
