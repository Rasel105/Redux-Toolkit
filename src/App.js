import React from "react";
import "./App.css";
import { useGetAllPostQuery, useGetAllDataByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from '../src/services/post'

function App() {

  // const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetAllDataByIdQuery(5);
  // const responseInfo = useGetPostByLimitQuery(5);
  // const [deletePost, responseInfo] = useDeletePostMutation(5);
  // const [createPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation();


  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  const updatePostData = {
    id: 1,
    title: 'this is update post update title',
    body: 'bar',
    userId: 1,
  }
  // console.log(responseInfo);
  if (responseInfo.isLoading) {
    return <h1>Loading...</h1>
  }
  console.log(responseInfo.isSuccess);

  return (
    <div className="App">
      {/* {error ? (<>Oh no, there was an error</>) : isLoading ? (<>Loading...</>) : data ? (
        <>
          <h3>{data}</h3>
        </>
      ) : null} */}
      {/* <h1>Get all data with reduxt toolkit</h1>
      {
        responseInfo.data.map(postdata => <div key={postdata.id}>
          <h1>{postdata.id} {postdata.title}</h1>
          <p>Body: {postdata.body}</p>
          <hr />
        </div>)
      } */}

      {/* Get limited data   */}
      {/* {
        responseInfo.data.map(postdata => <div key={postdata.id}>
          <h1>{postdata.id} {postdata.title}</h1>
          <p>Body: {postdata.body}</p>
          <hr />
        </div>)
      } */}


      {/* DeletePost  */}

      {/* <button onClick={() => deletePost(2)}>Delete Post</button> */}

      {/* update  */}

      {/* <button onClick={() => createPost(newPost)}>Create Post</button> */}
      <button onClick={() => updatePost(updatePostData)}>Update Post</button>

    </div>
  )
}

export default App;
