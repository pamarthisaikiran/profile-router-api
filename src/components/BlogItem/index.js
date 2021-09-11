// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, avatarUrl, imageUrl, title, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="container1">
        <img className="imgUrl" alt={`item${id}`} src={imageUrl} />
        <div className="topic-title">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>

          <div className="img-auth">
            <img alt={`avatar${id}`} className="avaUrl" src={avatarUrl} />
            <p className="auth">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
