import React from 'react'
import { Card,CardHeader,CardBody } from 'shards-react'
import '../css/Suggestions.css'



const Suggestions = (props) => {
    const options = props.posts.map(r => { return (
            <div key={r.id} className="suggestions">
                <p className="title">{r.title}</p><hr/>
                <p className="content">{r.content}</p><hr/>
            </div>
    )});

    return (
    <Card className="suggestions-card" style={{ maxWidth: "300px" }} >
        <CardHeader>TOP SEARCHES</CardHeader>
        <CardBody>
            <div className="options"> {options.slice(1,5)}</div>
        </CardBody>

    </Card>
    )
}

export default Suggestions