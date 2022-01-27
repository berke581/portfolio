import React from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

export const CardSkeleton: React.FC<IContentLoaderProps> = ({ width, height, ...rest }) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={height}
    // viewBox={`0 0 ${200} ${200}`} // why is this necessary?
    backgroundColor="#c2cad1"
    foregroundColor="#a7b3b9"
    {...rest}
  >
    <rect x="0" y="8" rx="8" ry="8" width="100%" height="60" />
  </ContentLoader>
)

export default CardSkeleton
