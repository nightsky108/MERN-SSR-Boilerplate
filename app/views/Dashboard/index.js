import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { compose } from 'redux'
import { connect } from 'react-redux'
import { connectRequest } from 'redux-query'
import api from '../../services'

import { Card, CardTitle, CardText } from 'react-md'

@compose(
  connect(state => ({
    models: state.db.models,
    screen: state.screen
  })),
  connectRequest(() => api.get('models'))
)
class Dashboard extends React.Component {
  static propTypes = {
    models: PropTypes.array,
    forceRequest: PropTypes.func
  }
  static defaultProps = {
    models: []
  }
  render (
    { models } = this.props
  ) {
    return (
      <article className='page'>
        <Helmet title='Dashboard' />
        <section>
          <Card className='md-block-centered'>
            <CardTitle title='Room Availability' subtitle='Utilization Per Building' />
            <CardText>
              <pre>
                <code>{JSON.stringify(models)}</code>
              </pre>
            </CardText>
          </Card>
        </section>
      </article>
    )
  }
}

export default Dashboard