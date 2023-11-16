import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper/Wrapper'
import axios from 'axios'
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RxCross1 } from "react-icons/rx"
const Home = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingUser, setEditingUser] = useState({});
    let accessToken = useSelector(state => state?.user?.user?.accessToken);
    let EditingArr = ['name', 'email', 'phone', 'password', 'bio', 'hearingFee', 'image', 'experiance', 'languages'];
    useEffect(() => {
        getUserList()
         // eslint-disable-next-line
    }, [])
    const getUserList = () => {
        setLoading(true)
        axios.get('https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/lawyer', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setUserList(response.data.data);
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.error('Error:', error);
            });


    }

    const handleDelete = (user) => {
        setLoading(true)
        axios.delete(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/User/${user._id}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                toast.success('User Deleted successfully');
                getUserList()
            })
            .catch(error => {
                setLoading(false)
                console.error('Error:', error);
            });
    }

    const handleEdit = () => {
        setLoading(true)
        axios.put(`https://shlok-mittal-lawyer-backend.vercel.app/api/v1/admin/updateLawyer/${editingUser._id}`, {
            name: editingUser.name,
            email: editingUser.email,
            phone: editingUser.phone,
            password: editingUser.password,
            bio: editingUser.bio,
            hearingFee: editingUser.hearingFee,
            image: editingUser.image,
            experiance: editingUser.experiance,
            languages: editingUser.languages
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                setLoading(false);
                toast.success('User Updated successfully');
                setEditingUser({})
                getUserList();
            })
            .catch(error => {
                setLoading(false);
                console.error('Error:', error);
            });
    }
    const handleImageError = (event) => {
        event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg';
    };
    return (

        <Wrapper>
            {
                loading ? <div className='w-full h-full flex items-center justify-center'>Loading...</div> :
                    <>
                        {
                            Object.keys(editingUser).length ?
                                <div className=' relative w-full h-full flex items-center justify-center flex-col '>
                                    <RxCross1 className='text-2xl absolute top-5 right-5 cursor-pointer' onClick={() => setEditingUser({})} />
                                    <div className=' md:w-[60%] w-full flex items-center justify-evenly flex-wrap gap-4 p-2'>
                                        {
                                            EditingArr.map(val => (
                                                <div className="flex items-start justify-center flex-col mt-3">
                                                    <label className='capitalize' htmlFor={val}>{val}</label>
                                                    <input id={val} type="text" value={editingUser[val]} onChange={(e) => setEditingUser({ ...editingUser, [val]: e.target.value })} className='border text-sm outline-none p-2 md:w-[15rem]' placeholder={`Please Enter ${val} `} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <button onClick={handleEdit} className='bg-[#0F2C64] py-[0.3rem] px-8 mt-2 rounded text-white border shadow'>{loading ? "loading" : 'Update'}</button>
                                </div>
                                :
                                <>
                                    <div className='w-full flex items-center justify-center py-4 bg-[#a9a9a90f] shadow border'>
                                        <div className="w-[10%]" />
                                        <div className="w-[20%] flex items-center justify-start gap-3">
                                            Lawyer Name
                                        </div>
                                        <div className="w-[20%] overflow-hidden whitespace-nowrap">Email</div>
                                        <div className="w-[20%] overflow-ellipses  whitespace-nowrap">Phone</div>
                                        <div className="w-[20%] text-center">No of Consultance</div>
                                        <div className="w-[10%]" />
                                    </div>
                                    {
                                        userList.map((user, i) => (
                                            <div className='w-full flex items-center justify-start p-2 shadow border'>
                                                <div className="w-[10%]">New</div>
                                                <div className="w-[20%] flex items-center justify-start gap-3">
                                                    <img src={user.image} onError={handleImageError} alt="" className='h-8 w-8 rounded-full' />
                                                    {user.fullName === '' ? "John Doe" : user.fullName}
                                                </div>
                                                <div className="w-[20%] overflow-hidden whitespace-nowrap">{user.email}</div>
                                                <div className="w-[20%] overflow-ellipses  whitespace-nowrap">{user.phone}</div>
                                                <div className="w-[20%] text-center">{user.minofconsultance}</div>
                                                <div className="w-[10%] flex items-center justify-center gap-5">
                                                    <div className="cursor-pointer" onClick={() => handleDelete(user)}>
                                                        <CiTrash />
                                                    </div>
                                                    <div className="cursor-pointer" onClick={() => setEditingUser(user)}>
                                                        <GoPencil />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>
                        }
                    </>
            }
        </Wrapper>
    )
}

export default Home