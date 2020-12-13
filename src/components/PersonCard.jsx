import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Photo_AlekseiSemenov from '../assets/images/Photo_AlekseiSemenov.jpeg'

const extra = (
  <a>
    <Icon name='user' />
    Frontend Middle
  </a>
)

export const PersonCard = () => (
  <Card
    image={Photo_AlekseiSemenov}
    header='Aleksei Semenov'
    meta='Akvelon SDE'
    description='Cool gentleman'
    extra={extra}
  />
)
