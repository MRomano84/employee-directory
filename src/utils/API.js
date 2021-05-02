import axios from "axios";

// export default{
//     getUsers: function() {
//         return axios.get("https://randomuser.me/api/?results=100&nat=us");
//     },
// };


export const getUsers = function() {
    return axios.get("https://randomuser.me/api/?results=100nat=us");
};
