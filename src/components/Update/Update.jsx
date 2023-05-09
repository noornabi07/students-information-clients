import React from 'react';
import Student from '../Student/Student';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const students = useLoaderData();
    const { _id, name, department, location, photo } = students;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const department = form.department.value;
        const location = form.location.value;
        const studentUpdate = { name, photo, department, location };
        console.log(studentUpdate)

        fetch(`http://localhost:4000/students/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Student Update Successfully',
                        text: 'Success Thanks',
                    })
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-purple-700 mt-3 text-center'>Update Student: <span className='text-red-600'>{students.name}</span></h2>
            <form onSubmit={handleUpdate} className="w-96 mx-auto border-2 mt-5 p-5 rounded-lg">
                <label className="font-semibold"><h6>Your Name</h6></label>
                <input type="text" defaultValue={name} required placeholder="Your Name" name='name' id='name' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Photo URL</h6></label>
                <input type="text" defaultValue={photo} required placeholder="Photo URL" name='photo' id='photo' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Department</h6></label>
                <input type="text" defaultValue={department} required placeholder="Department" name='department' id='email' className="input input-bordered input-primary w-full max-w-xs mb-2" />

                <label className="font-semibold"><h6>Your Location</h6></label>
                <input type="text" defaultValue={location} required name='location' id='location' placeholder="Your Location" className="input input-bordered input-primary w-full max-w-xs mb-2" /> <br />

                <input type="submit" value="Register" className='btn btn-primary w-full max-w-xs' />
            </form>
        </div>
    );
};

export default Update;