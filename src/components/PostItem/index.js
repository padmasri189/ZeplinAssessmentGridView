import React from 'react'
import {AiFillMessage} from 'react-icons/ai'

import './index.css'

class PostItem extends React.Component {
  state = {value: true}

  clickedApprove = () => {
    this.setState(prevState => ({value: !prevState.value}))

    //    alert('Ur card is Approved')
  }

  render() {
    const {value} = this.state
    const {each} = this.props
    const {commentsCount, title, profilePic, userName} = each
    return (
      <li className="postContainer">
        <h1 className="title">{title}</h1>
        <p className="para">
          IS SIMPLICITY A real thing ? or is design the persuit of....
        </p>
        <div className="ui_team_comments_container">
          <p className="uidiscuss">uidiscuss</p>
          <p className="teamUi">teamui</p>
          <p className="commentsCount">
            <AiFillMessage style={{color: 'blue'}} /> {commentsCount}
          </p>
        </div>
        <div className="image_approve_container">
          <div className="image_name">
            {profilePic === '' ? (
              <p className="nameStyle">{userName.slice(0, 2)}</p>
            ) : (
              <img src={profilePic} alt="profilepic" className="imageStyle" />
            )}

            <p className="username">{userName}</p>
          </div>
          {value ? (
            <button
              onClick={this.clickedApprove}
              type="button"
              className="approveButton"
            >
              Approve
            </button>
          ) : (
            <button
              onClick={this.clickedApprove}
              type="button"
              className="approveButton"
            >
              Approved
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default PostItem
