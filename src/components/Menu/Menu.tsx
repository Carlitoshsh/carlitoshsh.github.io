import * as React from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
} from '@rmwc/drawer'
import '@rmwc/drawer/styles'
import {
  List,
  SimpleListItem,
} from '@rmwc/list'
import '@rmwc/list/styles'

export const Menu: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Drawer
        modal
        open={open}
        onClose={() => setOpen(false)}>
        <DrawerHeader>
          <DrawerTitle>DrawerHeader</DrawerTitle>
          <DrawerSubtitle>Subtitle</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List twoLine>
            <SimpleListItem
              graphic="star_border"
              text="Cookies"
              secondaryText="Chocolate chip"
              metaIcon="info"
            />
            <SimpleListItem
              graphic="local_pizza"
              text="Pizza"
              secondaryText="Pepperoni"
              metaIcon="info"
            />
            <SimpleListItem
              activated
              graphic="mood"
              text="Icecream"
              secondaryText="Chocolate cookie dough"
              meta="Winner!"
            />
          </List>
        </DrawerContent>
      </Drawer>

      <button onClick={() => setOpen(!open)} raised>
        Toggle Modal
      </button>
    </>
  )
}
