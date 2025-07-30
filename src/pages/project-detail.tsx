// src/pages/project-detail.tsx
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Parallax } from '@react-spring/parallax'
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import { Themed } from "@theme-ui/mdx"

const ProjectDetail = (_props: PageProps) => (
  <Layout>
    <Parallax pages={2} as any>
      {/* Same background animations as main page */}
      <Divider speed={0.2} offset={0} factor={2}>
        <UpDown>
          <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
          <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
          <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
          <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
          <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        </UpDownWide>
      </Divider>
      
      {/* Your project content */}
      <Content speed={0.4} offset={0} factor={1}>
        <Inner>
          <Themed.h1>Project Name</Themed.h1>
          <Themed.p>Detailed project description here...</Themed.p>
          <Themed.a href="/">← Back to Portfolio</Themed.a>
        </Inner>
      </Content>
    </Parallax>
  </Layout>
)

export default ProjectDetail

export const Head: HeadFC = () => <Seo title="Project Detail" />