import React from 'react'
import PageTempate from 'components/common/PageTemplate'
import PostInfo from 'components/post/PostInfo'
import PostBody from 'components/post/PostBody'

const PostPage = () => {
    return (
        <PageTempate>
            <PostInfo/>
            <PostBody/>
        </PageTempate>
    )
}

export default PostPage