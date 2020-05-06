import React from 'react'
import PageTempate from 'components/common/PageTemplate'
import Post from 'containers/post/Post'
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer'

const PostPage = ({match}) => {
    const {id} = match.params

    return (
        <PageTempate>
            <Post id={id} />
            <AskRemoveModalContainer />
        </PageTempate>
    )
}

export default PostPage