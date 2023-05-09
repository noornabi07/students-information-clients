import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StudentCard from '../StudentCard/StudentCard';

const Student = () => {
    const loddedStudents = useLoaderData();
    const [students, setStudents] = useState(loddedStudents)
    return (
        <div>
            <h2 className='text-5xl font-bold my-6 text-center text-purple-700'>Students information</h2>
            <div className='grid grid-cols-2 gap-5 px-10'>
                {
                    students.map(sdnt => <StudentCard
                        key={sdnt._id}
                        sdnt={sdnt}
                        students={students}
                        setStudents={setStudents}
                    ></StudentCard>)
                }
            </div>
        </div>
    );
};

export default Student;