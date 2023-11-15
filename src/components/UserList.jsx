import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import User from "./User";
import SearchBar from "./SearchBar";

export default function UserList() {
    const [users, setUsers] = useState([])
    const [usersLength, setUsersLength] = useState("")
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState("");

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    let currentUsers = users.slice(firstPostIndex, lastPostIndex)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        getUsers()
    }, [currentPage])

    const getUsers = async () => {
        try {
            const res = await fetch(`https://api.escuelajs.co/api/v1/users`)
            const data = await res.json()
            setUsers(data)
            setUsersLength(data.length)

        } catch (error) {
            console.log(error)
        }
    }

    return <div className="flex items-center justify-center min-h-screen">
        <div className="">
            <div className="relative  shadow-md sm:rounded-lg md:p-20">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span>Avatar</span>
                            </th>
                            <th scope="col" className="px-16 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUsers.map((user, index) => {
                                return <User key={index} user={user} />
                            })
                        }
                    </tbody>
                </table>
                <Pagination firstPostIndex={firstPostIndex} lastPostIndex={lastPostIndex} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={usersLength} postsPerPage={postsPerPage} />
            </div>
        </div>
    </div>
}
