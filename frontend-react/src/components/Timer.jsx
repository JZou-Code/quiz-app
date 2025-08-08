import {useState, useEffect, useRef} from 'react'

function formatMMSS(ms) {
    const time = new Date(ms + 999).toISOString()
    return [time.slice(14, 16),time.slice(17, 19)]
}

export default function Timer({seconds = 10, onTimeOver}) {
    const time = formatMMSS(seconds * 1000)
    const min = time[0]
    const sec = time[1]
    const [timeLeft, setTimeLeft] = useState(`${min} Minutes ${sec} Seconds left`)
    const callbackRef = useRef(onTimeOver);

    useEffect(() => {
        callbackRef.current = onTimeOver;
    }, [onTimeOver]);


    useEffect(() => {
        const end = Date.now() + seconds * 1000
        const id = setInterval(() => {
            const left = end - Date.now()
            if (left <= 0) {
                setTimeLeft('Time Out')
                clearInterval(id)
                callbackRef.current({isTimeOver: true});
            } else {
                const time = formatMMSS(left)
                const min = time[0]
                const sec = time[1]
                setTimeLeft(`${min} Minutes ${sec} Seconds left`)
            }
        }, 1000)

        return () => clearInterval(id)
    }, [seconds])

    return <div>{timeLeft}</div>
}
