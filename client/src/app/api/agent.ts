import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../../router/Routes";

axios.defaults.baseURL = "http://localhost:5000/api/";

function sleep()
{
    return new Promise(resolve  => setTimeout(resolve,500));
}


function requestAxios (response: AxiosResponse){
    return response.data;
}

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
    }, (error: AxiosError) =>{
        const {data, status} = error.response as AxiosResponse;

        switch(status)
        {
            case 400:
                if(data.errors){
                    const validationErrors: string[]  =[];
                    for(const key in data.errors){
                        if(data.errors[key])
                        {
                           validationErrors.push(data.errors[key]);
                        }
                    }
                    throw validationErrors.flat();

                }
                toast.error(data.title )
                break;
            case 401:
                toast.error(data.title )
                break;
            case 404:
                toast.error(data.title )
                break;
            case 500:
                {router.navigate("/server-error", {state:{error: data}})}
                break;   
        }
        return Promise.reject(error.response);
    }
 )


//object
const methodHTTP = {
    get: (url: string) => axios.get(url).then(requestAxios),
    post: (url: string, body: object) => axios.post(url, body).then(requestAxios),
    put: (url: string, body: object) => axios.put(url, body).then(requestAxios),
    delete: (url: string) => axios.delete(url).then(requestAxios) 
}

const catalog = {
    list:()=> methodHTTP.get("products"), // this is function! 
    productDetails:(id: number) => methodHTTP.get(`products/${id}`) //this is fucntion
}

const testErrors = {
    get400Error: ()=>methodHTTP.get("buggy/bad-request"),
    get401Error: ()=>methodHTTP.get("buggy/unauthorised"),
    get404Error: ()=>methodHTTP.get("buggy/not-found"),
    get500Error: ()=>methodHTTP.get("buggy/server-error"),
    getValidationError: ()=>methodHTTP.get("buggy/validation-error")
}

const agent = {
    catalog,
    testErrors
}

export default agent;