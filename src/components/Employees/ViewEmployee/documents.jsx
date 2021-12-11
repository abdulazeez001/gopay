import styled from 'styled-components';
import { mainDownload } from '../../../assets';

const StlyedDocuments = styled.div`
    border-radius:.5rem;
    margin-top:1rem;
    padding:1rem;
    background-color:white;
    & p{
        font-size:.8rem;
        padding-bottom:1px;
    }
    & .title{
        color:#8888a7;
    }
    & .main-title{
        margin-bottom:1rem;
        padding-bottom:1rem;
        border-bottom:1px solid rgb(228, 225, 225);
    }
    & .documents-content > div:first-child{
        padding-bottom:1rem;
        border-bottom:1px solid rgb(228, 225, 225);
    }

    & .flex{
        padding:1rem;
        display:flex;
        justify-content:space-between;   
    }
    & .align-right{
        text-align:right;
    }

    & input{
        margin-top:.5rem;
        border:0;
        outline:0;
        font-size:.8rem;
        font-weight:700;
    }

    & .upload{
        margin-top:1.5rem;
        text-align:center;
    }

    & .upload > div{
        border-radius:.5rem;
        padding:4rem;
        border:1px dashed rgb(228, 225, 225);
        width:50%;
        margin:auto;
        margin-bottom:1rem;
    }

    & button{
        font-size:.8rem;
        font-weight:700;
        background-color:darkblue;
        color:white;
        padding:.5rem 4rem;
        border:1px solid darkblue;
        border-radius:.5rem;

    }
    & .drag{
        margin-top:1rem;
        font-size:.9rem;
        font-weight:700;
    }


`

const Documents = ({name,gender}) => {
    return (
        <StlyedDocuments>
            <div className='main-title'>
                <h3>Documents</h3>
            </div>
            <div className='documents-content'>
                <div >
                    <p className='title'>Title of Document</p>
                    <input type="text" placeholder="Enter the document titles" />
                </div>
                <div className='upload'>
                    <div>
                        <img src={mainDownload} alt=""/>
                        <p className='drag'>Drag your files here to upload</p>
                        <p className='title'> or click to browse</p>
                    </div>
                    <button>Upload Document</button>
                </div>
            </div>
        </StlyedDocuments>
    )
}

export default Documents