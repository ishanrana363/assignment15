import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {dataCreateRequest, dataGetById, dataUpdateRequest} from "../apirequest/ApiRequest.js";
import {toast, Toaster} from "react-hot-toast";
const SaveData = () => {
    const [createData, setCreateData] = useState({
        firstName : "",
        lastName : "",
        gender : "",
        dateOfBirth :"",
        nationality : '',
        address : "",
        email : "",
        phone : "",
        admissionDate : "",
        courses : ""
    })
    const {firstName,lastName,gender,dateOfBirth,nationality,address,email,phone,admissionDate,courses}
        = createData;
    const getValue = (key,value) =>{
        setCreateData(prevState => ({
            ...prevState,
            [key] : value
        }))
    }
    const navigate = useNavigate()
    const [uploadId, setUploadId] = useState(null)
    useEffect(() => {
        (async()=>{
            let params = new URLSearchParams(window.location.search);
            let id = params.get("id")
            setUploadId(id)
            if (id!==null){
                await formFillData(id)
            }
        })()
    }, []);
    const submitValue = async () => {
        if (firstName.length===0){
            return toast.error("  First Name  Required.")
        }else if (lastName.length===0){
            return toast.error("  Last Name  Required.")
        }else if (gender.length===0){
            return toast.error(" Select Your Gender.")
        }else if (dateOfBirth.length===0){
            return toast.error(" Date Of Bird Required ")
        }else if (nationality.length===0){
            toast.error(" nationality  required ")
        }else if (address.length===0){
            toast.error("  Address  Required ")
        }else if (email.length===0){
            toast.error("  Email Address  Required ")
        }else if (phone.length===0){
            toast.error(" Phone Number  Required")
        }else if (admissionDate.length===0){
            toast.error("Admission Date  Required")
        }else if (courses.length===0){
            toast.error("Select Course")
        }else {
            if (uploadId===null){
                let res = await dataCreateRequest(createData)
                if (res){
                    toast.success("Create Request Success ")
                    navigate("/")
                }else {
                    toast.error("Create Request Fail ")
                }
            }else {
                let res = await dataUpdateRequest(uploadId,createData)
                if (res){
                    toast.success("Data Update Successful ")
                    navigate("/")
                }else {
                    toast.error("Data Update Fail ")
                }
            }
        }
    }
    const formFillData = async (id) => {
        console.log(id)
        let res = await dataGetById(id)
        setCreateData({
            firstName: res["firstName"],
            lastName: res["lastName"],
            gender: res["gender"],
            dateOfBirth: res["dateOfBirth"],
            nationality: res["nationality"],
            address: res["address"],
            email: res["email"],
            phone: res["phone"],
            admissionDate: res["admissionDate"],
            courses: res["courses"]
        })
    }
    return (
        <div className= "container mt-5 " >
            <div className= "row" >
                {/*First Name*/}
                <div className= "col-md-4 " >
                    <label className= "form-label" htmlFor= "fName" > Enter Your First Name </label>
                    <input type= "text" className= "form-control" value={firstName}
                           onChange={(e)=>{getValue("firstName",e.target.value)}}
                           id= "fName" placeholder= "Enter Your First Name "
                    />
                </div>
                {/*Last Name*/}
                <div className= "col-md-4" >
                    <label className="form-label" htmlFor= "lName" > Enter Your Last Name </label>
                    <input type= "text" className= 'form-control'
                           value={lastName}
                           id= "lName" placeholder= "Enter Your Last Name "
                           onChange={(e)=>{getValue("lastName",e.target.value)}}

                    />
                </div>
                {/*Select Your Gender*/}
                <div className= "col-md-4" >
                    <label htmlFor= "gender" className= "form-label" >Select Your Gender </label> <br/>
                    <input type= "radio" name="gender"
                           checked={gender==="Male"}
                           onChange={()=>{getValue("gender","Male")}}
                           id= "gender" /> Male <br/>
                    <input type= "radio" name= "gender"
                           checked={gender==="Female"}
                           onChange={()=>{getValue("gender","Female")}}
                    /> Female <br/>
                </div>
                {/*// Data of Birth*/}
                <div className= "col-md-4 mt-4" >
                    <label className="form-label" htmlFor= "dBirth" >Data Of Birth</label>
                    <input type= "text" className="form-control"
                           id= "dBirth" placeholder= "Enter Your Date Of Birth "
                           value={dateOfBirth} onChange={(e)=>{getValue("dateOfBirth",e.target.value)}}
                    />
                </div>
                {/*Nationality*/}
                <div className= "col-md-4 mt-4" >
                    <label className="form-label" htmlFor= "nationality" >Nationality</label>
                    <input type= "text" className= "form-control"
                           id= "nationality" placeholder= "Nationality"
                           value={nationality} onChange={(e)=>{getValue("nationality",e.target.value)}}
                    />
                </div>
                {/*Address*/}
                <div className= "col-md-4 mt-4" >
                    <label className="form-label" htmlFor= "address" >Address</label>
                    <input type= "text" className= "form-control"
                           placeholder= "Address" id= "address"
                           value={address}
                           onChange={(e)=>{getValue("address",e.target.value)}}
                    />
                </div>
                {/*Email Address*/}
                <div className= "col-md-4 mt-4" >
                    <label className="form-label" htmlFor= "email" >Email Address </label>
                    <input type= "email" className= "form-control"
                           id= "email" placeholder= "Email Address"
                           value={email}
                           onChange={(e)=>{getValue("email",e.target.value)}}
                    />
                </div>

                {/*Phone Number*/}
                <div className= "col-md-4 mt-4 " >
                    <label className="form-label" htmlFor= "phone" > Phone Number </label>
                    <input type= "text" className= "form-control"
                           id= "phone" placeholder= "Enter Your Phone Number "
                           value={phone}
                           onChange={(e)=>{getValue("phone",e.target.value)}}
                    />
                </div>
                {/*admissionDate*/}
                <div className= "col-md-4 mt-4 " >
                    <label className="form-label" htmlFor= "admissionDate" > Admission Data </label>
                    <input type= "text" className="form-control"
                           id= "admissionDate" placeholder= "Admission Data"
                           value={admissionDate} onChange={(e)=>{getValue("admissionDate",e.target.value)}}
                    />
                </div>
                <div className= "col-md-4 mt-4 " >
                    <label className="form-label" htmlFor= "courses" > Courses </label> <br/>
                    <input type= "radio" name="courses"
                           checked={courses==="Math"}
                           onChange={()=>{getValue("courses","Math")}}
                           id= "courses" /> Math <br/>
                    <input type= "radio" name= "courses"
                           checked={courses==="Physics"}
                           onChange={()=>{getValue("courses","Physics")}}
                    /> Physics <br/>
                    <input type= "radio" name= "courses"
                           checked={courses==="Chemistry"}
                           onChange={()=>{getValue("courses","Chemistry")}}
                    /> Chemistry <br/>
                    <input type= "radio" name= "courses"
                           checked={courses==="Biology"}
                           onChange={()=>{getValue("courses","Biology")}}
                    /> Biology <br/>
                </div>
                <div className= "col-md-4 mt-4" >
                    <label className= "form-label"  >Save </label> <br/>
                    <button  className= "btn btn-success w-100 "
                             onClick={submitValue}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default SaveData;









































