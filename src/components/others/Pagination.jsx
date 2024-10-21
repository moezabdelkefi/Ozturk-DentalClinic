import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event, number) => {
        event.preventDefault();
        setCurrentPage(number);
    };

    return (
        <>
            <div className="row">
                <div className="col-md-12 pagi-area text-center">
                    <nav aria-label="navigation">
                        <ul className="pagination">
                            {pageNumbers.map(number => (
                                <li className={`page-item ${number === currentPage ? 'active' : ''}`} key={number}>
                                    <Link
                                        className="page-link"
                                        to="#"
                                        onClick={(event) => handleClick(event, number)}
                                    >
                                        {number}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Pagination;
