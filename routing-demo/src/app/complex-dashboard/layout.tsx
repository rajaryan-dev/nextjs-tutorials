export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false; // Simulate login state
  return isLoggedIn ? (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* Main content */}
      <div className="mb-8">{children}</div>

      {/* Dashboard section */}
      <div className="flex gap-6">
        {/* Left Column: Users & Revenue */}
        <div className="flex flex-col gap-6 w-1/3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            {users}
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            {revenue}
          </div>
        </div>

        {/* Right Column: Notifications */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
