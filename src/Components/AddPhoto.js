import React, {Component} from 'react';



class AddPhoto extends Component {

    // bind constructor to itself so context is correct and this in handleSubmit is always pointing to component instance
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // update state array by post submitted
    handleSubmit(e) {
        e.preventDefault();
        const imageLink = e.target.elements.link.value;
        const description = e.target.elements.description.value;

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        // if this is true, if user added in a value, add post to post array
        if (description && imageLink) {
            this.props.startAddingPost(post)
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                {/* <h1> Add a Photo </h1> */}
                <div>
                    <form onSubmit={this.handleSubmit} className="form">
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto