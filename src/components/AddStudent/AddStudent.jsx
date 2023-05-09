import React from 'react';
import Swal from 'sweetalert2';

const AddStudent = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const department = form.department.value;
        const location = form.location.value;
        const newStudent = {name, photo, department, location};
        console.log(newStudent)

        fetch('http://localhost:4000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success your Add Student',
                    text: 'Thank you so much',
                  })
                  form.reset();
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-purple-700 mt-3 text-center'>Please submit your information</h2>
            <form onSubmit={handleAddUser} className="w-96 mx-auto border-2 mt-5 p-5 rounded-lg">
                <label className="font-semibold"><h6>Your Name</h6></label>
                <input type="text" required placeholder="Your Name" name='name' id='name' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Photo URL</h6></label>
                <input type="text" required placeholder="Photo URL" name='photo' id='photo' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Department</h6></label>
                <input type="text" required placeholder="Department" name='department' id='email' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Location</h6></label>
                <input type="text" required name='location' id='location' placeholder="Your Location" className="input input-bordered input-primary w-full max-w-xs mb-2" /> <br />

                <input type="submit" value="Register" className='btn btn-primary w-full max-w-xs' />
            </form>
        </div>
    );
};

export default AddStudent;