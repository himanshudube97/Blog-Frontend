import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getUserDetails } from '../../actions/userAction';

function UserDetails() {
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => {
        return state.user;
      });

      useEffect(()=>{
        dispatch(getUserDetails());
      },[dispatch, error]);

      console.log(user, "user");
    return (
       <>
       </>
    );
}

export default UserDetails;