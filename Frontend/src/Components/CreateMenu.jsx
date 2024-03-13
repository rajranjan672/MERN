import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const NewMenu = ({gett}) => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({
      title: "",
      description: "",
      method: "",
      category: "",
      price: "",
    })
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [method, setMethod] = useState('');
    const [photo, setPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const sub = async(e) => {
    e.preventDefault()
     axios.post("http://localhost:3001/api/menu/createMenu", data).then((resp) => {
       setData(resp.data)

        console.log('res',resp.data)
        

     }).then(() => {
      setData({
        title: "",
        description: "",
        method: "",
  
       })
       handleClose()

       gett()
       console.log("subb")
     })
   
    
}

    const handleClickOpen = () => {
      setOpen(true);
      console.log("open")
    };
  
    const handleClose = () => {
      setOpen(false);
      console.log("close")

    };

  

  return (
    <>
    <div className='new'>
    <Button variant='contained' className='col-3 col-sm-3 col-md-2 co-lg-2 col-xl-2' onClick={handleClickOpen}>
        Add Plan
      </Button>
    </div>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <form class="row g-3 needs-validation" onSubmit={sub}>
        <div className="form-floating">
                      <input type="text" name='title' id="title" className="form-control" required
                        placeholder="title" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
                      <label className="form-label" htmlFor="title">Title</label>

                    </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name='description' id="description" placeholder="name@example.com"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="description">Description</label>

          </div>
          <div class="form-floating">
          <select class="form-select" name='category' aria-label="Floating label select example" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} >
            <option selected value="">Open this select menu</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Maxician">Maxician</option>
          </select>
          <label htmlFor="floatingSelectGrid">Category</label>
          </div>
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" name='price' id="price" placeholder=""
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="price">Price</label>

          </div>

          {/* <label htmlFor="photo">Upload Photo</label> */}
          {/* <input type="file" id='photo' name='photo' accept='image/jped, image/jpg, image/png' onChange={handleFileChange} required /> */}
          <div>
          <button type='submit' className='btn btn-primary mx-2'>Submit</button>
          <button onClick={handleClose}>Cancle</button>
          </div>
         
          </form>
        </DialogContent>
       
      </Dialog>
    </>
  )
}

export default React.memo(NewMenu)
