import React, {  useState } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    //className: 'container',
})`
    margin: 8 px;
    display: flex;

`

const Image = styled.img.attrs({
    //className: 'container'
})`
    margin: 4px;
    height: 250px;
    width: 250px;
    
`

const DisplayInfo = styled.div.attrs({
    // className: 'container',
})` 
    margin-bottom: 20 px;
    
`

const PicList = styled.div.attrs({

})`

`

function Display () {
    
    let newPic = "../images/shoes113.jpg";
    
    const clickHandler = (event) => {
        //console.log(event.currentTarget.src)
        let url = event.currentTarget.src.toString();
        //console.log(url.split('/'))
        let splitUrl = url.split('/')
        newPic = '../images/' + splitUrl[splitUrl.length - 1]
        console.log(event.target)
        setPic(newPic)
    }

    const Card = (props) => {
        return (
            <div>
                <img src={props.photo} alt={props.name} onClick = {clickHandler}/>
            </div>
        )
    }
    const makeEntry = (entry) =>  {
        
    }

    const [pic, setPic] = useState("../images/shoes111.jpg")
    
        return (
            <Container>

                <DisplayInfo>

                <Image src={pic} onClick={clickHandler} />
                   
                </DisplayInfo>
 
                <PicList>

                    <Image src="../images/shoes111.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes112.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes113.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes114.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes115.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes116.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes117.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes118.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes119.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes120.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes121.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes122.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes123.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes124.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes125.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes126.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes127.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes128.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes129.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes130.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes131.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes132.jpg" alt="a shoe" onClick={clickHandler} />
                    <Image src="../images/shoes133.jpg" alt="a shoe" onClick={clickHandler} />
                </PicList>

            </Container>
        )
}

export default Display


// import React, { Component, useState } from 'react'
// import styled from 'styled-components'

// import Links from './Links'

// const Container = styled.div.attrs({
//     //className: 'container',
// })`
//     margin: 8 px;
//     height: 250px;
//     width: 250px;
// `

// const Image = styled.img.attrs({
//     //className: 'container'
// })`
//     margin: 4px;
//     height: 100%;
    
// `

// const DisplayInfo = styled.div.attrs({
//     // className: 'container',
// })` 
//     margin-bottom: 20 px;
//     height: 100%
// `

// let shoePic = "../images/shoes111.jpg"

// const [pic, setPic] = useState('../images.shoes111.jpg')

// const changePic = () => {
//     setPic("../images.shoes112.jpg")
// }

// class Display extends Component {

//     render() {
//         return (
//             <Container>
                
//                 <Image src={pic} onClick={changePic}/>
//                     'FIRST Display'
                
//                 <DisplayInfo>
//                     {'SECOND DISPLAY'}
                   
//                 </DisplayInfo>
//             </Container>
//         )
//     }
// }

// export default Display
