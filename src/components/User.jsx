import React from "react";

export default function User({ user }) {
    return <tr className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
        <td className="p-4">
            <img
                src={user?.avatar}
                className="w-16 md:w-32 max-w-full max-h-full"
                alt="Apple Watch"
            />
        </td>
        <td className="px-6 py-4">
            <div>
                {user?.email}
            </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {user?.password}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {user?.name}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {user?.role}
        </td>
    </tr>;
}
