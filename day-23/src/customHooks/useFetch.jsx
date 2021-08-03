import {useState , useEffect} from 'react';


const useFetch = (url) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async ()=>{
            const apidata = await fetch(url);
            const jsonData = await apidata.json();
            setData(jsonData);
        }
        fetchApi();
        // return () => {
        //     // cleanup
        // }
    }, []);

    
    return {data};
}
export default useFetch;
