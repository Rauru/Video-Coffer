import database from '../firebase/firebaseConfig';
import {removeList,addList, getList} from '../actions/list';
import { connect } from 'react-redux';


const videoId = (key) => ({
    type: "VIDEO_ID",
    payload: key
});

function hashCode(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
};
  

export const addVideoList = (videoData={})=>{
    return (dispatch)=>{
        const {
            title = '',
            description = '',
            id='',
            thumbnail= '',
            email= ''
        }= videoData;
        const video = {
            title, description,id,thumbnail
        }
        const hash = hashCode(email)
        return database.ref(`videolist/${hash}`).push(video).then((ref)=>{
            dispatch(addList({title:videoData.title, description:videoData.description, id:videoData.id, sid:ref.key,thumbnail:videoData.thumbnail}));
        })
    };

};

export const getVideoList = (email)=>{
    return (dispatch)=>{
        const hash = hashCode(email)
        const savedvideos =[];
        database.ref(`videolist/${hash}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                savedvideos.push({
                    sid: child.key,
                    ...child.val()
                })
            })
            //console.log(savedvideos);
            dispatch(getList(savedvideos));
        });
    };
};

export const removeVideoList = (videoData)=>{
    return (dispatch)=>{
        const {
            sid='',
            email = ''
        }= videoData;
        const hash = hashCode(email)
        database.ref(`videolist/${hash}/${sid}`).remove().then(()=>{
            dispatch(removeList(sid));
        })
    };
};

export default videoId;
