import {useEffect, useState} from 'react';

const useHeaderActivePage = () => {
    const [page, setPage] = useState(localStorage.headerActivePage || 'home');

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(page);
        root.classList.add(page);
        localStorage.setItem('headerActivePage', page);

        console.log('useHeaderActivePage: ' + page)
    }, [page]);

    return [page, setPage];
};

export default useHeaderActivePage;