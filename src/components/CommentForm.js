import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import axios from 'axios';

class CommentForm extends Component {

    state = {
        body: '',
    }

    bodyChange = e => {
        this.setState({
            body: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const commentInfo = {
            // userName: this.props.userInfo.name,
            postId: this.props.postId,
            body: this.state.body,
            
        };

            
        axios.post('http://localhost:3000/api/posts/comment', commentInfo)
            .then(res => {
                console.log(res)
                this.props.getNewComment(res.data);
            });

        this.setState({
            body: '',
        });

    }
    
    async componentDidMount() {
        const res = await fetch(console.log(this.state));
        // const res = await fetch(`http://localhost:4000/api/posts/user-posts/${this.props.userInfo.userId}`);
        const posts = await res.json();
        this.setState('');
    };

    render() {
        return (
            <div style={{ "margin-top": "90px"}}>
                <h1 style={{ "margin-bottom": "-150px" }} >"Go to the movies in a gorilla costume."</h1> 
                {/* <h1>{idea prop goes here}</h1> */}
                <form onSubmit={this.onSubmit}> 
                <Button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Get Idea</Button>
                <br/>
                    <Input
                        style={{ "margin-top": "90px"}}
                        type="text"
                        name="body"
                        id="commentbody"
                        placeholder="Write your idea here..."
                        value={this.state.body}
                        onChange={this.bodyChange}
                    />
                    <Button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Send Idea</Button>
                </form>
            </div>
        )
    }
}

export default CommentForm;

