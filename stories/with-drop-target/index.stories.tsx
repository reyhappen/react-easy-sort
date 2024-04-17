import React from 'react'
import { arrayMoveImmutable } from 'array-move'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryFn } from '@storybook/react'
import { makeStyles } from '@mui/styles'
import SortableList, { SortableItem } from '../../src/index'
import { generateItems } from '../helpers'

const meta: Meta = {
  component: SortableList,
  title: 'react-easy-sort/With drop target',
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
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: 16,
    '@media (min-width: 600px)': {
      gridGap: 24,
    },
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(84, 84, 241)',
    color: 'white',
    height: 150,
    cursor: 'grab',
    fontSize: 20,
    userSelect: 'none',
  },
  dragged: {
    backgroundColor: 'rgb(37, 37, 197)',
    cursor: 'move',
    zIndex: 100,
  },
  dropTarget: {
    border: '2px dashed rgb(84, 84, 241)',
    height: 150,
    boxSizing: 'border-box',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(84, 84, 241)',
  },
  forbidden: {
    cursor: 'not-allowed',
  },
})

type StoryProps = {
  count: number,
  forbiddenPointType: 'point' | 'element',
  lockAxis: 'x' | 'y',
  allowDrag: boolean
}

export const Demo: StoryFn<StoryProps> = ({ count, forbiddenPointType, lockAxis, allowDrag }: StoryProps) => {
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
      dropTarget={<DropTarget />}
      draggedForbiddenClassName={classes.forbidden}
      forbiddenPointType={forbiddenPointType}
      lockAxis={lockAxis}
      allowDrag={allowDrag}
    >
      {items.map((item) => (
        <SortableItem key={item}>
          <div className={classes.item}>{item}</div>
        </SortableItem>
      ))}
    </SortableList>
  )
}

const DropTarget = () => {
  const classes = useStyles()
  return <div className={classes.dropTarget}>Drop Target</div>
}
