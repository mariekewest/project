function App() {
    const title= 'blog post'
    const body = 'this is my blog post'
const comments = [
    {id: 1, text: 'comment 1'},
    {id: 2, text: 'comment 2'},
    {id: 3, text: 'comment 3'}
    ]
    return (
        <div className='container'>
        <h1>{ title.toUpperCase() }</h1>
        <p>{body}</p>
            <div className="comments">
                <h3>comments({comments.length})</h3>
                <ul>
                    {comments.map((comment, index)=> (
                        <li key={comment.id}>{comment.text} = extra</li>
                    ))}

                </ul>

            </div>
        </div>
    )
}
export default App