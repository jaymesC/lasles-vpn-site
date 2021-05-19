import React from 'react'
import "normalize.css"
import { styled } from "styletron-react"
import Button from "../../atoms/SectionButton"

const SectionA = () => {

  const Article = styled("section", {
    marginLeft:"9.4rem",
    fontFamily:"Rubik",
    marginTop:"7.5rem",
  })

  const ArticleOne = styled("article", {

  })

  const StyledH1 = styled("h1", {
    fontWeight:"500",
    fontSize:"50px",
    lineHeight:"70px",
    color:"#0B132A",

  })

  const StyledP = styled("p", {
    marginTop:"20px",
    marginBottom:"3rem",
    color: "#4F5665",
    fontSize:"16px",

  })


  return (
    <>
      <Article>
        <ArticleOne>
          <StyledH1>
            Want anything to be <br />
            easy with <strong>LaslesVPN.</strong> 
          </StyledH1>
          <StyledP>
            Provide a network for all your needs 
            with ease and fun using LaslesVPN <br />
            discover interesting features from us.
          </StyledP>
          <Button>Get started</Button>
        </ArticleOne>
      </Article>
    </>
  )
}

export default SectionA
