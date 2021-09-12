import { useState, useCallback } from 'react';
const useHttp = (config, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(config.url, {
                method: config.method ? config.method : 'GET',
                headers: config.headers ? config.headers : {},
                body: config.body ? config.body : null,
            });
            const data = await response.json();

            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        }

        setIsLoading(false);
    }, []);

    return { isLoading, error, sendRequest };
};

export default useHttp;
