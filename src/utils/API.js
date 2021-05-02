import axios from "axios";

const getUsers = () => {
    return axios.get("https://randomuser.me/api/?results=50");
};

//Must export as object
const exportedObj = {
    getUsers
};

export default exportedObj;


// export default {
//     getUsers: function() {
//         return axios.get("https://randomuser.me/api/?results=100&nat=us");
//     },
// };

// export default getUsers;
