import * as React from 'react'
import { mockData } from './mockData'
import { useState } from 'react'
import {
  DataTable,
  DataTableRow,
  DataTableBody,
  DataTableContent,
  DataTableCell,
} from '@rmwc/data-table'
import '@rmwc/data-table/styles'
import styled from 'styled-components'

const Input = styled.input`
  margin: 1rem 0;
  width: 100%;
  padding: 0.25rem;
`

const CenteredTable = styled.div`
  margin: 0 auto;
`

export const Table: React.FC = () => {
  const [word, setWord] = useState('')

  const handleValueChanges =
   (e: React.ChangeEvent<HTMLInputElement>) => {
     setWord(e.target.value)
   }

  return (
    <>
      <Input
        type="text"
        placeholder='Filter by id or name'
        value={ word }
        onChange={handleValueChanges} />
      <br />
      <CenteredTable>
        <DataTable>
          <DataTableContent>
            <DataTableBody>
              {
                mockData
                  .filter(obj =>
                    (obj.name).includes(word)
                    || (obj.id.toString()).includes(word),
                  )
                  .map((obj, i) => {
                    return (
                      <DataTableRow key={i}>
                        <DataTableCell >{obj.id}
                        </DataTableCell>
                        <DataTableCell >{obj.name}
                        </DataTableCell>
                        <DataTableCell>
                          {obj.description}
                        </DataTableCell>
                      </DataTableRow>
                    )
                  })
              }
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </CenteredTable>
    </>
  )
}
