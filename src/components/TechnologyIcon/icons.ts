import { IconType } from 'react-icons'
import {
  SiC,
  SiCplusplus,
  SiOpengl,
  SiGo,
  SiDocker,
  SiJava,
  SiSpringboot,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiGatsby,
  SiTailwindcss,
} from 'react-icons/si'

export type TechnologiesType =
  | 'c'
  | 'cpp'
  | 'opengl'
  | 'go'
  | 'docker'
  | 'java'
  | 'springboot'
  | 'postgresql'
  | 'typescript'
  | 'javascript'
  | 'react'
  | 'gatsby'
  | 'tailwind'

type TechnologyDataType = {
  [key in TechnologiesType]: {
    label: string
    icon: {
      // TODO: use this convention everywhere
      // instead of element
      iconComponent: IconType
      color?: string
    }
  }
}
export const TechnologyData: TechnologyDataType = {
  c: {
    label: 'C',
    icon: { iconComponent: SiC, color: '#A8B9CC' },
  },
  cpp: {
    label: 'C++',
    icon: { iconComponent: SiCplusplus, color: '#00599C' },
  },
  opengl: {
    label: 'OpenGL',
    icon: { iconComponent: SiOpengl, color: '#5586A4' },
  },
  go: {
    label: 'Go',
    icon: { iconComponent: SiGo, color: '#00ADD8' },
  },
  docker: {
    label: 'Docker',
    icon: { iconComponent: SiDocker, color: '#2496ED' },
  },
  java: {
    label: 'Java',
    icon: { iconComponent: SiJava },
  },
  springboot: {
    label: 'Spring Boot',
    icon: { iconComponent: SiSpringboot, color: '#6DB33F' },
  },
  postgresql: {
    label: 'PostgreSQL',
    icon: { iconComponent: SiPostgresql, color: '#4169E1' },
  },
  typescript: {
    label: 'TypeScript',
    icon: { iconComponent: SiTypescript, color: '#3178C6' },
  },
  javascript: {
    label: 'JavaScript',
    icon: { iconComponent: SiJavascript, color: '#F7DF1E' },
  },
  react: {
    label: 'React',
    icon: { iconComponent: SiReact, color: '#61DBFB' },
  },
  gatsby: {
    label: 'Gatsby',
    icon: { iconComponent: SiGatsby, color: '#663399' },
  },
  tailwind: {
    label: 'Tailwind CSS',
    icon: { iconComponent: SiTailwindcss, color: '#06B6D4' },
  },
}
