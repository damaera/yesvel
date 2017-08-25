import styled from 'styled-components'

const NodeTreeWrapper = styled.div`
  padding: 0 0 0 15px;
  cursor: pointer;
  height: ${ ({ collapsed }) => !collapsed ? '23px' : 'auto' };
  overflow: hidden;
`

export default NodeTreeWrapper;