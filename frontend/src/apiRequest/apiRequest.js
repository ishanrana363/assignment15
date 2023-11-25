import axios from 'axios';

export const dataCreateRequest = async (postBody) => {
    try {
        let res = await axios.post(" http://localhost:5000/api/v1/registration",postBody)
        if (res.status===201){
            return true
        }else {
            return  false
        }
    }catch (e){
        return  false
    }
}

export const dataReadRequest = async () => {
    try {
        let res = await fetch(" http://localhost:5000/api/v1/read")
        let jsonData = await res.json()
        return jsonData["data"]
    }catch (e){
        return []
    }
}

export const dataUpdateRequest =  async  (id,postBody) => {
    try {
        let res = await axios.post(" http://localhost:5000/api/v1/update/"+id,postBody);
        if (res.status === 200){
            return true
        }
        else {
            return false
        }
    }catch (e){
        return false
    }
}

export const dataDeleteRequest =async (id) => {
    try {
        let res = await axios.get(" http://localhost:5000/api/v1/delete/"+id);
        if (res.status===200){
            return true
        }else {
            return false
        }
    }catch (e){
        return false
    }
}
export const dataGetById = async (id) => {
    try {
        let res = await fetch(" http://localhost:5000/api/v1/data-get-by-id/"+id)
        let jsonData = await res.json()
        return jsonData["data"]
    }catch (e){
        return []
    }
}





































