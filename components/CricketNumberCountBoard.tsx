import React, { FC } from 'react'
import { Grid, GridItem, Table, TableContainer, Tbody, Td, Tr, Text } from '@chakra-ui/react'
import {
  convertCountScoreToNumberOfCount,
  convertNumberOfCountToMarkCount,
} from '../lib/Helper/Converter'
import CricketMark from './CricketMark'

type CricketNumberCountBoardProps = {
  data: string[][]
}

const CricketNumberCountBoard: FC<CricketNumberCountBoardProps> = ({ data }) => {
  const scores = convertCountScoreToNumberOfCount(data, 15, 20)
  return (
    <>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            {scores.map((number) => (
              <Tr key={`number-${number.number}`}>
                <Td key={`number-${number.number}`}>
                  <Text fontSize='lg'>{number.number === 25 ? 'BULL' : number.number}</Text>
                </Td>
                <Td key={`score-${number.number}`}>
                  <Grid templateColumns='repeat(4, 50px)' gap={1}>
                    {convertNumberOfCountToMarkCount(
                      scores.find((score) => score.number === number.number)?.count ?? 0,
                    ).map((count, i) => (
                      <GridItem key={`count-${count}-${i}`}>
                        <CricketMark count={count} />
                      </GridItem>
                    ))}
                  </Grid>
                </Td>
                <Td>
                  <Text fontSize='lg'>{number.total}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default CricketNumberCountBoard
