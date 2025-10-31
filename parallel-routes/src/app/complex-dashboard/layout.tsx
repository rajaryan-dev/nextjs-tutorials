"use client";

import { useState } from "react";
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
  const [isLoggedIn, setIsloggedin] = useState(false); // Simulate login state
  return isLoggedIn ? (
    <div className="m-5 p-10 bg-gray-50 min-h-screen ">
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
      <div className="m-12 p-4 size-24 align-middle justify-between flex ">
        <button onClick={() => setIsloggedin(false)}>Logout</button>
      </div>
    </div>
  ) : (
    <div>
      {login}
      <button onClick={() => setIsloggedin(true)}>Login</button>
    </div>
  );
}
