import axios from 'axios'
export const http = axios.create({
    // baseURL: 'http://127.168.2.199/'
    baseURL: 'http://127.204.50.219/'
  })
  //人名查询请求
  let search = 'getdata_anchor.php'
http.findName = ({
    ask,ask_word,ask_content
}) => {
    return http.get(search,{params: {
        ask,ask_word,ask_content
      }})
  }
//按条件查询省
http.findprocince=({
ask,ask_word
})=>{
    return http.get(search,{
       params:{
        ask,ask_word   
       }
    })
}
//按条件查找市
http.findcitys=({
    ask,ask_word,ask_content
})=>{
    return http.get(search,{
        params:{
ask,ask_word,ask_content
        }
    })
}
//按条件查找区
http.findareas=({
    ask,ask_word,ask_content,province
})=>{
   return http.get(search,{
     params:{
        ask,ask_word,ask_content,province 
     }  
   })
}
//按条件查找学校
http.findSchool=({
    ask,ask_word,ask_content,city,province
})=>{ 
    return http.get(search,{
        params:{  ask,ask_word,ask_content,city,province
        }
    })
}
//按条件查找班级返回
http.findClass=({
    ask,ask_word,ask_content,district,city,province
})=>{
    return http.get(search,{
        params:{
            ask,ask_word,ask_content,district,city,province
        }
    })
}
//条件查找人名返回
// http.findOnes=({
//     ask,ask_word,ask_content,district,school,city,province
// })=>{
//     return http.get(search,{
//      params:{
//         ask,ask_word,ask_content,district,school,city,province
//      }
//     })
// }

http.findPerson=({
    ask,ask_word,ask_content,district,city,province,school
})=>{
    return http.get(search,{
        params:{
            ask,ask_word,ask_content,district,city,province,school
        }
    })
}