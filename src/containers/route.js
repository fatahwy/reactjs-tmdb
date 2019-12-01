import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home'
import { NotFound } from 'components/Common'
  
//   function UserDetailView({match}){
//     return <h1>User : {match.params.id}</h1>
//   }

export default () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/users' exact component={UserListView} />
            <Route path='/user/:id' exact component={UserDetailView} /> */}
            <Route component={NotFound} />
        </Switch>
    )
  }
  

