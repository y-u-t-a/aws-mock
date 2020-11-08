import React from 'react'
import Const from '../common/Const'
import S3BucketList from './S3BucketList'
import { Container, Button } from 'react-bootstrap'

export default class S3 extends React.Component {
  render() {
    document.title = `S3 | ${ Const.BASE_PAGE_TITLE }`
    return (
      <Container>
        <h1>S3 バケット一覧</h1>
        { buttons }
        <S3BucketList />
      </Container>
    )
  }
}

const buttons = (
  <div className="float-right">
    <Button
      variant="danger"
      disabled={ true }
    >バケット削除</Button>
    {' '}
    <Button
      variant="primary"
      href='/s3/bucket/new'
    >バケット作成</Button>
  </div>
)