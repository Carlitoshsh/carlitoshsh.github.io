import * as React from 'react'
import { library, IconName, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

interface Icon {
  name: IconName,
  size: SizeProp
}

export const FontAwesomeIconWrapper: React.FC<Icon> = (
  { name, size }: Icon,
) => (
  <FontAwesomeIcon size={size} icon={{ prefix: 'fas', iconName: name }} />
)
