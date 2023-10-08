import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../public/images/newcontenet.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Box>

            <Carousel activeIndex={index} onSelect={handleSelect} style={{ maxHeight: '700px' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.prismic.io/tc-blog/4968a760-202e-4a18-af6b-954d81453c79_Vishing_Feature_Image.jpg?w=800"

                        // src="images\truecallerCar1.jpg"
                        alt="First slide"
                        style={{ maxHeight: '500px', objectFit: 'cover' }}

                    />

                    {/* <ExampleCarouselImage text="First slide" /> */}
                    {/* <Carousel.Caption>
                        <h2 className="text-light fw-bolder image-heading" style={{ textShadow: "2px 2px 4px blue" }}>
                            The World’s Best <span class="text-primary" style={{ textShadow: "2px 2px 4px white" }}>Blog</span> website
                        </h2>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.prismic.io/tc-blog/fb696c7f-2e1a-40ef-b63f-332358a5967c_1.Main+img.png?w=800"

                        // src="images/truecallerCar2.jpg"
                        alt="First slide"
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    {/* <Carousel.Caption>
                        <h2 className="text-light fw-bolder image-heading" style={{ textShadow: "2px 2px 4px blue" }}>
                            The World’s Best <span class="text-primary" style={{ textShadow: "2px 2px 4px white" }}>Blog</span> website
                        </h2>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.prismic.io/tc-blog/173261cb-6f73-46b9-9466-e310a7dd3b91_New-TC-logo.jpg?w=800"
                        // src="images\truecallerCar3.jpg"
                        alt="First slide"
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />


                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    {/* <Carousel.Caption>
                        <h2 className="text-light fw-bolder image-heading" style={{ textShadow: "2px 2px 4px blue" }}>
                            The World’s Best <span class="text-primary" style={{ textShadow: "2px 2px 4px white" }}>Blog</span> website
                        </h2>

                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Box>
    );
}

export default ControlledCarousel;