import { useNavigate } from "react-router-dom";

const Cancel = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    // Show the modal by removing the 'hidden' class
    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-50 bg-black bg-opacity-50">  
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button
                        type="button"
                        className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => navigate('/')}
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-red-500 dark:text-red-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 00-.707 1.707L8.586 9.88 7.293 11.172a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 9.88l1.293-1.293A1 1 0 0013 7.586L11.707 8.88 10 7.586a1 1 0 00-.707-.293z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Cancel</span>
                    </div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                       Payment Cancelled action
                    </p>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-900"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
