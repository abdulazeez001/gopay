import styled from 'styled-components'

const StyledTag = styled.div`
    background-color:white;
    padding:1rem;
    border-radius:.5rem;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    // justify-content:space-between;
    gap:1rem;
    // margin-right:1rem;
    & h2{
        font-size:.85rem;
        color:#8181A5;
        font-weight:400;
        margin-bottom:.5rem
    }
    & p{
        font-weight:500;
    }

`

const Tags= ({tagTitle,content,imageLink}) =>{
    return (
        <StyledTag>
          <div>
              <h2>{tagTitle}</h2>
              <p>{content}</p>
          </div>
          <div>
              <img src={imageLink} alt="" />
          </div>
        </StyledTag>
    )
}

export default Tags