import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({ posts:res.data })
        })
        .catch(e => {
            console.log(e);
            this.setState({ errorMsg: "Error to retrive data"})
        })
    }
    
    render() {
        const { posts } = this.state
        const {errorMsg} = this.state
        return (
            <div>
            <h1>List of data</h1>
                {
                    posts.length ? 
                    posts.map(post => (<div key={post.id}>{post.title}</div>)) : null
                }
                {
                    errorMsg ? <div>{errorMsg} </div> : null
                }
            </div>
        )
    }
}

export default PostList
