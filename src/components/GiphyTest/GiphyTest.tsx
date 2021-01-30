import * as React from 'react'
import { useState, useEffect } from 'react'
import getGifs from '../../services/getGifs'

export const GiphyTest: React.FC = () => {
    const [gifs, setGifs] = useState([])

    //Re-rendering. Use [] for once
    useEffect(() => {
        getGifs().then(theGifs => setGifs(theGifs))
    }, [])

    return (
        <>
            {
                gifs.map((theGif, key) => {
                    <div className="test">
                        <h4>{theGif.title}</h4>
                        <img key={key} src={theGif.url} />
                    </div>

                })
            }
        </>
    )
}
