import React from "react"
import { Pizza, Filters, Sort } from '../components';

function Home() {
    return (
        <div>
            <div className="flex justify-around">
                <Filters />
                <Sort />
            </div>
            <Pizza />
        </div>
    )
}

export default Home;

