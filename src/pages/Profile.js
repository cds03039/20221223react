import { useParams } from "react-router-dom";

const data = {
    JSY : {
        name: '장승연',
        desc : '나 자신',
    },
    SSB : {
        name : '손수빈',
        desc : '바보멍청이저능아',
    },
    WCS : {
        name : '원창섭',
        desc : '예비신랑',
    },
};

const Profile =()=>{
    const params = useParams();
    const profile = data[params.username];

    return(
        <div>
            <h1>생존자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.desc}</p>
                </div>
            ):(
                <p>없는 생존자입니다.</p>
            )}
        </div>
    )
}

export default Profile;