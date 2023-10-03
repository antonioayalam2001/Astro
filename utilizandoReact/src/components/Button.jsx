import { useEffect, useState } from 'react';
export const Button = ({ message }) => {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    console.log('Button component');
    useEffect(() => {
        console.log('Button component mounted');
        return () => console.log('Button component unmounted');
    }, [])
    return (
        <div className="p-4 bg-slate-400 rounded-3xl">
            <p className="m-3">{message}</p>
            <button className="p-2 bg-black text-white rounded-2xl outline-none border-none" onClick={handleClick}>I'm a button from React</button>
            <p className="m-3">You clicked me {count} times</p>

        </div>
    )
}