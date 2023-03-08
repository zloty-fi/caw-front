declare module 'react-blockies' {
  interface BlockiesProps {
    seed: string
    size?: number
    scale?: number
    color?: string
    bgColor?: string
    spotColor?: string
    className?: string
  }
  const Blockies: React.FC<BlockiesProps>

  export default Blockies
}
