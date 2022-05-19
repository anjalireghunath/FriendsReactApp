import React from 'react'
import Header from './Header'

const View = () => {
    var viewfriend=[{"_id":"628613a5fb68dd10d6f53366","name":"RAHUL","friendName":"RAMESH","friendNickName":"RAMU","DescribeYourFriend":"Test description","__v":0},{"_id":"62863eb472b33daf7a22b7d5","name":"hhjs","friendName":"sjhq","friendNickName":"wdhd","__v":0},{"_id":"62864e10d5446187887e5f63","name":"Amritha","friendName":"Revathy","friendNickName":"Revu","DescribeYourFriend":"pretty","__v":0},{"_id":"62864eafd5446187887e64b9","name":"Remya","friendName":"Malavika","friendNickName":"Malu","DescribeYourFriend":"Beautiful","__v":0},{"_id":"6286514dd5446187887e9708","name":"Geetha","friendName":"Aavani","friendNickName":"Aavus","DescribeYourFriend":"loveable","__v":0},{"_id":"62865418d5446187887eb625","__v":0},{"_id":"6286560bd5446187887eb679","__v":0},{"_id":"62865636d5446187887eb69f","__v":0},{"_id":"62865693d5446187887eb6a1","name":"Sruthy","friendName":"Jibin","friendNickName":"Thomasuu","DescribeYourFriend":"good listner","__v":0},{"_id":"628656dad5446187887eb6a3","__v":0},{"_id":"6286586cd5446187887eb6a5","name":"Adhi","friendName":"Sruthy","friendNickName":"malu","DescribeYourFriend":"Angry baby","__v":0},{"_id":"62865a06d5446187887eb6a9","name":"ndj","friendName":"dnclmf","friendNickName":"mmkd","DescribeYourFriend":"llkpkf","__v":0},{"_id":"62865abcd5446187887eb6ab","name":"ahhh","friendName":"sjkdc","friendNickName":"ggg","DescribeYourFriend":"hhh","__v":0},{"_id":"62866323d5446187887edcb3","name":"Adhi","friendName":"Sruthy","friendNickName":"malu","DescribeYourFriend":"good girl","__v":0}]
  return (
    <div>
<Header/>

<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">FriendName</th>
      <th scope="col">FriendNickName</th>
      <th scope="col">DescribeYourFriend</th>
    </tr>
  </thead>
  <tbody>
    {viewfriend.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.friendName}</td>
      <td>{value.friendNickName}</td>
      <td>{value.DescribeYourFriend}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default View