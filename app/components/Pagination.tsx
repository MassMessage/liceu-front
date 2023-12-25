'use client'
import React, { useState, FC } from 'react';
import Arrow from '@/public/icons/Arrow.svg';
import ArrowInverse from '@/public/icons/Arrow-inverse.svg';
import { Icon } from './Icon';

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange?: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange && onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            <button
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 py-1 rounded-full disabled:opacity-50"
                disabled={currentPage === 1}
            >
                <Icon src={ArrowInverse} alt='' minWidth={12} quality={50} />
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={`px-3 py-1 font-bold rounded-full ${currentPage === index + 1 ? 'border border-black' : 'text-[#6E6E6E]'}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 py-1 rounded-full disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                <Icon src={Arrow} alt='' minWidth={12} quality={50} />
            </button>
        </div>
    );
};

export default Pagination;
