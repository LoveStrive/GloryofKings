import axios from 'axios'

// //最终版本
// export function request(config) {
//   return new Promise((resolve, reject) => {
//
//     return instance1(config)
//   })
// }
const instance1=axios.create({
  baseURL:'http://127.0.0.1:3000'
});
export default instance1