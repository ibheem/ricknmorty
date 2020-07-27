import styled from 'styled-components';


const MainContent = styled.div`
    padding: 20px 0;
`;

const SectionWrapper= styled.section`
    display: flex;
    flex-wrap: wrap;
 `
 const AsideSection = styled.div`
    width:15%;
    @media only screen and (max-width: 992px){
        width:100%
    }
    @media only screen and (max-width: 768){
        width:100%
    }
 `;
 const MainSection = styled.div`
    min-height:400px;
    margin-left:10px;
    width:82%;
    @media only screen and (max-width: 992px){
        width:100%
    }
    @media only screen and (max-width: 768){
        width:100%
    }
`;
const UtilWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`;



export { MainContent, SectionWrapper, MainSection, AsideSection, UtilWrapper };