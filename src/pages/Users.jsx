import React from 'react'
import AddArticle from '../components/AddArticle'
import DeleteArticle from '../components/DeleteArticle'

const Users = ({fetchTitle, title, loading}) => {
  return (
    <div>
        <DeleteArticle fetchTitle={fetchTitle} title={title} loading={loading}/>
        <AddArticle fetchTitle={fetchTitle} title={title} loading={loading}/>
    </div>
  )
}

export default Users
