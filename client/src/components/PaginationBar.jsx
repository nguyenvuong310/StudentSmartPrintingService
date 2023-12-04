import { useState, useEffect } from "react";

const PaginationBar = (props) => {
    const [check, setCheck] = useState(1);

    useEffect(() => {
    }, [check]);

    const handleOnChangeCheck = (data) => {
        setCheck(() => data);
    };
    const changePagenum = (data) => {
        window.scrollTo(0, 0);
        handleOnChangeCheck(data);
        props.input(data);
    };

    const handleNextPage = () => {
        window.scrollTo(0, 0);
        const test = check + 1;
        if (test > 3) {
            setCheck(() => 3);
            changePagenum(3);
        } else {
            setCheck(() => test);
            changePagenum(test);
        }
    };

    const handlePrevPage = () => {
        window.scrollTo(0, 0);
        const test = check - 1;
        if (test < 1) {
            setCheck(() => 1);
            changePagenum(1);
        } else {
            setCheck(() => test);
            changePagenum(test);
        }
    }
    return (
        <ol className="absolute inset-x-0  bottom-0 flex justify-center gap-1 text-xs font-medium mb-0">
            <li>
                <button
                    onClick={() => handlePrevPage()}
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
            <li>
                <button
                    onClick={() => changePagenum(1)}
                    className={
                        check == 1
                            ? "block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                            : "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    }
                >
                    1
                </button>
            </li>
            <li>
                <button
                    onClick={() => changePagenum(2)}
                    className={
                        check == 2
                            ? "block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                            : "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    }
                >
                    2
                </button>
            </li>
            <li>
                <button
                    onClick={() => changePagenum(3)}
                    className={
                        check == 3
                            ? "block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                            : "block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    }
                >
                    3
                </button>
            </li>
            <li>
                <button
                    onClick={() => handleNextPage()}
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </li>
        </ol>
    );
};
export default PaginationBar;