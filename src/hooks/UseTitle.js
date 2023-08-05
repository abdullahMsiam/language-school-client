import React, { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} | KNOW-Lng`;
    }, [title])
};

export default UseTitle;