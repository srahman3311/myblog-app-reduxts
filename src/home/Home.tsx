import { useEffect, useState } from "react";


interface IState {
    eventState: {
        isEmpty: boolean,
        events: {
            title: string,
            count: number
        } [], // An array of objects. Each object has two properties
        stylists: (string | number) [] // An array of string or number
    }
}


export default function Home () {

    //const [eventState, setEventState] = useState<IState["eventState"]>({
    const [eventState, setEventState] = useState<IState["eventState"]>({
        isEmpty: false,
        events: [],
        stylists: []
    });



    useEffect(() => {

        setEventState(currentVal => {
            return {
                ...currentVal,
                isEmpty: true,
                events: [{ title: "ABCD", count: 5 }],
                // stylists: ["ABC", 6]
            }
        })
     
    }, [])


    return (
        <div className="home">
            <h2>Home</h2>

            {eventState.events.map(event => {
                return <p>{event.title}</p>
            })}
        </div>
    );

}