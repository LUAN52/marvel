import axios from "axios";
import md5 from "md5";

const publicKey = "e349c3df49ba9c76296c68ce1da9fafe";
const privateKey = "18830f07a0b0b4fba978bbe027d6e3d3b397e79c";
const timeStamp = Number(new Date());

const hash = md5(timeStamp+privateKey+publicKey)



const getComics = ()=>{
   return  axios.get(`https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)}



 const getComicById =(id)=>{

    return  axios.get(`http://gateway.marvel.com/v1/public/comics/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
 }  



let methods = {
    getComics:getComics,

    getComicById:getComicById
}


export default methods