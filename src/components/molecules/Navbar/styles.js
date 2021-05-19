import { styled } from "styletron-react"

export const StyledNavBar = styled("nav", {
  marginTop:"2rem",
  color: "black",
  display: "flex",
  justifyContent: "space-between",
  marginLeft:"9.4rem",
  marginRight:"9.4rem",
})

export const StyledNavLinks = styled("section", {
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: " 19px",
  paddingTop:"1rem",
  color:"#4F5665", 
})

export const StyledLink = styled("a", {
  marginRight:"30px",
  cursor:"pointer",
})

export const StyledSignSection = styled("a", {
  display:"flex",
  fontWeight:"600",
})

export const StyledSignLink = styled("a", {
  marginRight:"15px",
  marginTop:"1rem",
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "500",
  color:"#0B132A",
  cursor:"pointer",
})
