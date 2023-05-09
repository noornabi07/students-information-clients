import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const StudentCard = ({ sdnt, students, setStudents }) => {
    const {_id, name, location, department, photo } = sdnt;

    const handleDelete = (id) =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/students/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                                'Deleted!',
                                'Student has been deleted.',
                                'success'
                              )
                    }

                    const remaining = students.filter(stu => stu._id !== _id);
                    setStudents(remaining)
                })
            }
          })
    }


    return (
        <div>
            <div className="card card-side bg-base-100 border">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex items-center justify-between">
                    <div className='ml-12'>
                        <h2 className="card-title"><span className='text-green-600 font-semibold text-xl'>Name:</span> {name}</h2>
                        <p className='text-red-500 font-semibold'><span className='text-green-600 font-semibold text-xl'>Department:</span> {department}</p>
                        <p className='text-red-500 font-semibold'><span className='text-green-600 font-semibold text-xl'>Department:</span> {location}</p>
                    </div>
                    <div className="justify-end ml-5">

                        {/* icon part start */}
                        <div className="btn-group btn-group-vertical">
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </button>
                            <Link to={`/update/${_id}`}>
                                <button className="my-3 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>

                                </button>
                            </Link>

                            <button onClick={() => handleDelete(_id)} className="text-red-600">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                            </button>

                        </div>
                        {/* icon part end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;