
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
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


const ProfileTweets = () => {
return(

<div className = {style.wrapper}>
{tweets?.map((tweet,index)=>(

<Post 
key={index}
displayName="Aditya Singh"
userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}

text = {tweet.text}
avatar = {tweet.avatar}
isProfileImageNft={tweet.isProfileImageNft}
timestamp = {tweet.timestamp}
/>


))}



</div>



)



}
export default ProfileTweets