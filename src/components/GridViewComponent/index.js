// Write your JS code here
import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

import PostItem from '../PostItem'

class GridViewComponent extends Component {
  state = {
    postsList: [],
  }

  componentDidMount() {
    this.getPosts()
  }

  clickedButton = id => {
    console.log(id)
  }

  getPosts = async () => {
    const apiUrl =
      'https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts'

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.map(each => ({
        commentsCount: each.comments_count,
        title: each.title,
        profilePic: each.posted_by.profile_pic,
        userId: each.posted_by.user_id,
        userName: each.posted_by.username,
      }))
      this.setState({postsList: updatedData})
    }
  }

  render() {
    const {postsList} = this.state
    return (
      <div className="mainContainer">
        <h1 className="accept-request-list-heading">Accept Requests</h1>
        <ul className="allPostsContainer">
          {postsList.map(each => (
            <PostItem
              clickedButton={this.clickedButton}
              each={each}
              key={v4()}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GridViewComponent
