import { useEffect, useState } from "react"


export default function Timer() {
    const [time, setTime] = useState({minutes: 0, seconds: 0})

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newSeconds = (time.seconds + 1) % 60
            const newMinutes = Math.floor((time.seconds + 1) / 60)

            setTime({minutes: newMinutes, seconds: newSeconds})
        }, 1000)

        return () => clearInterval(intervalId)
    }, [time])

    return (
        <h1 className="timer">Timer: {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</h1>
    )
}