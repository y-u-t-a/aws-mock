import React from 'react'
import AwsClients from '../common/AwsClients'
import Const from '../common/Const'

export default class Vpc extends React.Component {
  render() {
    document.title = `VPC | ${ Const.BASE_PAGE_TITLE }`
    getVpc()
    return (
      <div>
        <h3>VPC一覧</h3>
      </div>
    )
  }
}

function getVpc() {
  AwsClients.ec2.describeVpcs((err, data) => {
    if (err) {
      console.log(err, err.stack)
    } else {
      console.log(data.Vpcs)
    }
  })
}