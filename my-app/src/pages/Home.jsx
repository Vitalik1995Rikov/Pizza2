import React from "react"
import { useState } from "react";
import { Pizza, Filters, Sort } from '../components';

function Home() {
    const [categoryId, setCategoryId] = useState(0);
    return (
        <div>
            <div className="flex justify-around">
                <Filters value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
                <Sort />
            </div>
            <Pizza />
        </div>
    )
}

export default Home;

