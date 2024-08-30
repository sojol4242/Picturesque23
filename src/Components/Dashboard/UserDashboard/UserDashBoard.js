import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ManageServices from '../ManageService/ManageServices';
import AddService from './AddService/AddService';
import Orders from './AllOrder/Orders';
import BookedOrders from './BookedOrder/BookedOrders';
import Profile from './Profile/Profile';
import ReviewForm from './Review/ReviewForm';
import Map from './Map/Map';
import MapComponent from './Map/Map';

const UserDashBoard = () => {
    return (
        <Switch>
               <Route exact path="/dashboard/orderList"><Orders/></Route>
               <Route path="/dashboard/bookedList"><BookedOrders/></Route>
               <Route path="/dashboard/manageServices"><ManageServices/></Route>
               <Route path="/dashboard/addServices"><AddService/></Route>
               <Route path="/dashboard/profile"><Profile/></Route>
               <Route path="/dashboard/review"><ReviewForm/></Route>
               <Route path="/dashboard/map"><Map/></Route>
        </Switch>
    );
};

export default UserDashBoard;