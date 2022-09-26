import axios from "axios"

export const fetchUserData = async (term, setLoader) => {
    setLoader(true)
    try {
        const response = await axios.get(`https://reqres.in/api/users/${term}`);
        return response.data;
    } catch(error) {
        console.error(`Error while executing fetchUserData(): ${JSON.stringify(error)}`);
        return await error.response;
    }
}