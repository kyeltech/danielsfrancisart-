import React  from 'react'
import {HomeAboutContainer, RowContainer, ContainerHeader, ContainerContent, Btn, Artwork, ArtContainer, ImgIcon} from './assets/styles'
import girl from './assets/Image/girl.jpg'
import shade from './assets/Image/shade.png'
import gallery from './assets/Image/gallery.png'
import print from './assets/Image/print.png'
import artist from './assets/Image/artist.png'






export default function HomeAbout(){

    const products = [{
        "id" : "dfwefck",
        "image": girl,
        "icons": print,
        "description": "PRINT   ",
        "price":100.000,
        "year_created": 2020,
        "frame_size": "70 x 100mm",
        "name": "Graphics on the wall",
        "quantity": "limited edition",
        "size": "medium",
        "equipnment_used" : "pencil drawing"
    }, {
        "id": "edcercf",
        "icons": artist,

        "description": "GALLERY",
        "price":50.000,
        "year_created": 2020,
        "frame_size": "70 x 100mm",
        "name": "Graphics on the wall",
        "quantity": "limited edition",
        "size": "medium",
        "equipnment_used" : "pencil drawing" 
    }, {
        "id" :  "defefe",
        "icons": gallery,

        "description": " OTHER ARTIST",
        "price":100.000,
        "year_created": 2020,
        "frame_size": "70 x 100mm",
        "name": "Graphics on the wall",
        "quantity": "limited edition",
        "size": "medium",
        "equipnment_used" : "pencil drawing"
    }];

  

    return(
        <>
        <HomeAboutContainer className="container-fluid">
            <div className="container">
                <RowContainer className="row ">
                    <div className="col-lg-12 py-5">
                        <div className="row">
                            <div className="col-lg-6 ">
                            <img src={girl} alt="aboutPix" className="img-fluid"/>
                            </div>
                            <div className="col-lg-6 text-center ">
                          <ContainerHeader className="">
                              About Us
                          </ContainerHeader>
                          <ContainerContent className="">
                          In layman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </ContainerContent>

                          <Btn> 
                Learn more
                          </Btn>

                    </div>
                   </div>
                    </div>

                </RowContainer>

            </div>
        </HomeAboutContainer>

        <Artwork className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="row">
                        {products.map( (events) => (

                             <ArtContainer 
                             className="col-lg-4 text-center"
                              key={events.id}
                              >
                             <img src={shade} alt="printpix" className="img-fluid"/>
                             <div className="container-caption row">
                                 <div className="col-lg-12 text-center  inner-values">
                                     <ImgIcon src={events.icons} alt="printicon" className="img-fluid inner-images " />
                                     <h1 style={{color: 'white', fontWeight: 700, fontSize: 26 }}>
                                         {events.description}
                                     </h1>  
                             </div>
                             </div>

                           </ArtContainer>
                        ))

 
                        }
                      
             

                    </div>
                    </div>

                </div>

            </div>

        </Artwork>
        </>
    )
}