import React from 'react'
import { arrayMoveImmutable } from 'array-move'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryFn } from '@storybook/react'
import { makeStyles } from '@mui/styles'
import SortableList, { SortableItem, SortableKnob } from '../../src/index'
import { generateItems } from '../helpers'

const meta: Meta = {
  component: SortableList,
  title: 'react-easy-sort/With knobs',
  parameters: {
    componentSubtitle: 'SortableList',
  },
  argTypes: {
    count: {
      name: 'Count of elements',
      control: {
        type: 'range',
        min: 3,
        max: 12,
        step: 1,
      },
      defaultValue: 3,
    },
  },
  args: {
    count: 3,
  },
}

export default meta

const useStyles = makeStyles({
  list: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    userSelect: 'none',
  },
  item: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(84, 84, 241)',
    color: 'white',
    margin: 8,
    width: 150,
    height: 34,
    padding: '0 8px',
  },
  dragged: {
    backgroundColor: 'rgb(37, 37, 197)',
    cursor: 'move',
    zIndex: 100,
    "& *": {
      cursor: 'move !important',
    }
  },
  knob: {
    padding: '0.15rem 0.5rem',
    color: 'rgb(84, 84, 241)',
    fontSize: '0.8em',
    backgroundColor: 'white',
    marginRight: '0.5rem',
    borderRadius: '2px',
    cursor: 'grab',
  },
  forbidden: {
    cursor: 'not-allowed',
    "& *": {
      cursor: 'not-allowed !important',
    }
  },
})

type StoryProps = {
  count: number,
  forbiddenPointType: 'point' | 'element',
  lockAxis: 'x' | 'y',
  allowDrag: boolean
}

export const Demo: StoryFn<StoryProps> = ({ count, forbiddenPointType, lockAxis, allowDrag }) => {
  const classes = useStyles()

  const [items, setItems] = React.useState<string[]>([])
  React.useEffect(() => {
    setItems(generateItems(count))
  }, [count])
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    action('onSortEnd')(`oldIndex=${oldIndex}, newIndex=${newIndex}`)
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex))
  }
  return (
    <SortableList
      onSortEnd={onSortEnd}
      className={classes.list}
      draggedItemClassName={classes.dragged}
      draggedForbiddenClassName={classes.forbidden}
      forbiddenPointType={forbiddenPointType}
      lockAxis={lockAxis}
      allowDrag={allowDrag}
    >
      {items.map((item) => (
        <SortableItem key={item}>
          <div className={classes.item}>
            <SortableKnob>
              <div className={classes.knob}>DRAG</div>
            </SortableKnob>
            {item}
          </div>
        </SortableItem>
      ))}
    </SortableList>
  )
}
