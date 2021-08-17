import React, { useState } from 'react';
import SideBar from './sideBar/SideBar';

const AddDoctor = () => {
    
    const [info,setInfo]=useState({});
    const [file,setfile]=useState(null);

     const handleBlur=(e)=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo); 
        console.log(info)
     }

     const handleFile=(e)=>{
          const newFile=e.target.files[0];
          setfile(newFile);
          console.log(file)
     }

     const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        
        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })
     }

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" onBlur={handleBlur} class="form-control" name="email" placeholder="Enter email"></input>
                            
                        </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" onBlur={handleBlur} class="form-control" placeholder="Name" name="name"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Image</label>
                                <input onChange={handleFile} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture"></input>
                            </div>
                               
                                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                 </div>
            </div>
      </section>
                    );
};

                    export default AddDoctor;