import React, { useState } from 'react'
import Header from './Header'

const AddFriend = () => {
  var [name,setName]=useState("")
  var [friendname,setFriendname]=useState("")
  var [friendnick,setFriendnick]=useState("")
  var [describeyourfrnd,setDescribe]=useState("")
  const subData=()=>{
    const data={"name":name,"friendName":friendname,"friendNickName":friendnick,"DescribeYourFriend":describeyourfrnd}
    console.log(data)
  }
  return (
    <div>
<Header/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Friend Name</label>
                    <input onChange={(e)=>{setFriendname(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Friend Nick Name</label>
                    <input onChange={(e)=>{setFriendnick(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Describe Your Friend</label>
                    <textarea onChange={(e)=>{setDescribe(e.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
        
    </div>
  )
}

export default AddFriend