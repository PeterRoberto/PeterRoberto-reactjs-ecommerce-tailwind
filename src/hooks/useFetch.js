import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [url]);

    return { data };
}


