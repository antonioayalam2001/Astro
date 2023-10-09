import { useEffect, useState } from "preact/hooks";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [quote, setQuote] = useState('');
    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then((response) => response.json())
            .then((data) => {
                setQuote(data.content);
            });
    }, [count]);
    function incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <div className={'p-2 flex'}>
            <div className={"flex-1 flex flex-col  p-2"}>
                <p className={'text-white text-lg text-center '}>Current value {count}</p>
                <button className={"bg-slate-950 text-slate-200 p-2 mt-4  rounded cursor-pointer font-light"} onClick={incrementCount}>Get me One More</button>
            </div>
            <div className={"flex-1"}>
                <p className={'text-white text-lg mt-4'}>{quote}</p>
            </div>
        </div>
    )
}