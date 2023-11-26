import  { useEffect, useState } from 'react';
import { dataDeleteRequest, dataReadRequest } from '../apiRequest/apiRequest';
import { ThreeCircles } from  'react-loader-spinner'
import {toast, Toaster} from 'react-hot-toast';
import {NavLink} from "react-router-dom";
const DataList = () => {
    const [data,setData] = useState([])
    const [deleteDataId, setDeleteDataId] = useState(0)
    useEffect(()=>{
        (async()=>{
            const res = await dataReadRequest()
            setData(res)
        })()
    },[deleteDataId])
    const deleteData = async (id) =>{
        let res = await dataDeleteRequest(id)
        if(res){
            setDeleteDataId( Date.now)
            toast.success("Data delete successful ")
        }else{
            toast.error("Data delete fail")
        }
    }
    if(data.length===0){
        return(
            <div className="container ">
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        )
    }else{
        return(
            <div >
                <div className="row">
                    <div className="com-md-12">
                        <div className= "table-responsive" >
                            <table className='table' >  
                                <thead>
                                    <tr>
                                        <th>FirstName</th>
                                        <th>LastName</th>
                                        <th>Gender</th>
                                        <th>DateOfBirth</th>
                                        <th>Nationality</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>AdmissionDate</th>
                                        <th>Courses</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item,i)=>{
                                            return(
                                                <tr  key={i} >
                                                    <td> { item["firstName"] } </td>
                                                    <td> { item["lastName"] } </td>
                                                    <td> { item["gender"]} </td>
                                                    <td> { item["dateOfBirth"]} </td>
                                                    <td> { item["nationality"]} </td>
                                                    <td> { item["address"]} </td>
                                                    <td> { item["email"]} </td>
                                                    <td> { item["phone"]} </td>
                                                    <td> { item["admissionDate"]} </td>
                                                    <td> { item["courses"]} </td>
                                                    <td>
                                                        <button className= "btn btn-danger "
                                                                onClick={()=>deleteData(item["_id"])} >
                                                            Delete
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <NavLink className= "btn btn-success w-100 "
                                                                 to= {`/save?id=`+item["_id"]} >
                                                            Edit
                                                        </NavLink>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-center"/>
            </div>
        )
    }
};

export default DataList;