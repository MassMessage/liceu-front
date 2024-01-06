'use client'
import React, { useState, FC } from 'react';

type INotesList = {
    list: any[];
};


export const NotesList: FC<INotesList> = ({ list }) => {
    return (
        <ol>
            {list?.map((item, i) =>
                <li>
                    <sup>{(i + 1) + ' '}</sup>
                    {item}
                </li>
            )}
        </ol>
    );
};

