import React, { useEffect } from 'react'

export default function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage, firstPostIndex, lastPostIndex }) {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900">{firstPostIndex}-{lastPostIndex}</span> of <span className="font-semibold text-gray-900">{totalPosts}</span></span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>

                {pages.map((page, index) => {
                    return <li key={index} >
                        <button onClick={() => setCurrentPage(page)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 dark:border-gray-700 dark:text-gray-400 
                        ${page === currentPage ? 'bg-green-400' : 'bg-white dark:bg-gray-800 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'}`}>{page}</button>
                    </li>
                })}

                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    )
}
