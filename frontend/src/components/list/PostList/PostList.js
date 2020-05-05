import React from 'react'
import styles from './PostList.scss'
import classNames from 'classnames/bind'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

const PostItem = () => (
    <div className={cx('post-item')}>
        <h1><Link to='/'>Title</Link></h1>
        <div className={cx('date')}>2020-05-04</div>
        <p>content</p>
        <div className={cx('tags')}>
            <Link to='/'>#tag</Link>
            <Link to='/'>#tag</Link>
            <Link to='/'>#tag</Link>
        </div>
    </div>
)

const PostList = () => (
    <div className={cx('post-list')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
)

export default PostList