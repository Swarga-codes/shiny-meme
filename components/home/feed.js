import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,

}

const tweets =[{
    displayName: 'Aditya',
    userName: '0x23242352xfd2df',
    avatar: 'https://yt3.ggpht.com/yti/AJo0G0lR61vHXh61XshxRPdyIpgPLmIY90Y0idu0bA=s88-c-k-c0x00ffffff-no-rj-mo',
    text: 'gm',
    isProfileImageNft: false,
timestamp: '2020-06-01T12:00:00.00Z',},
        
{
    displayName: 'Aditya',
    userName: '0x23242352xfd2df',
    avatar: 'https://yt3.ggpht.com/yti/AJo0G0lR61vHXh61XshxRPdyIpgPLmIY90Y0idu0bA=s88-c-k-c0x00ffffff-no-rj-mo',
    text: 'gm',
    isProfileImageNft: false,
timestamp: '2020-06-01T12:00:00.00Z',},

{
    displayName: 'Aditya',
    userName: '0x23242352xfd2df',
    avatar: 'https://yt3.ggpht.com/yti/AJo0G0lR61vHXh61XshxRPdyIpgPLmIY90Y0idu0bA=s88-c-k-c0x00ffffff-no-rj-mo',
    text: 'gm',
    isProfileImageNft: false,
timestamp: '2020-06-01T12:00:00.00Z',},
]



function Feed(){
    return(
        <div className={style.wrapper}>
<div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />

      </div>
      <TweetBox />
{

tweets.map((tweet,index) => (

   <Post 
   
   key = {index}
   displayName={tweet.displayName}
   userName={tweet.userName}
   avatar={tweet.avatar}
   text = {tweet.text}
   isProfileImageNft={tweet.isProfileImageNft}
   timestamp={tweet.timestamp}
   
   />
))

}
        </div>
        
        
        )
}





export default Feed