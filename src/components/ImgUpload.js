import React, { Component } from 'react'

// import Dropzone from 'react-dropzone'
// import ReactCrop from 'react-image-crop'

import axios from 'axios';

export class ImgUpload extends Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.file[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('');
            // .then(res => {
            //     console.log(res);
            // })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default ImgUpload
