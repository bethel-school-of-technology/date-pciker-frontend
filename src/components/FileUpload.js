import React, { Fragment, useState } from 'react';
import axios from 'axios';

export const FileUpload = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose File');
    const [uploadFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const onSubmit = async  e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);   

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath }); 
        } catch(err){
            if(err.response.status === 500){
                console.log("There was a problem with the server")
            } else {
                console.log(err.response.data.msg); 
            }

        }
    };
    //'file' relates to backend

    return (
        <Fragment>
            <form onSumbit={onSubmit}>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required onChange={onChange}/>
                        <label className="custom-file-label" htmlfor="validatedCustomFile">{fileName}</label>
                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                    <input type="submit" value="Upload" className="btn btn-primary btn-block"/>
            </form>
        </Fragment>
            )
        }
export default FileUpload