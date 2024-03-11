import React from 'react'
import Container from '../Container'

function About() {
  return (
    <Container>
      <p className=" text-2xl font-semibold py-10">Welcome to Mobile Phone Bazaar!</p>

      <ul class="list-disc *:py-2">
      <li>
      <p className=" text-lg font-normal">At Mobile Phone Bazaar, we are dedicated to providing you with the latest and greatest in mobile technology at affordable prices. With a passion for innovation and a commitment to customer satisfaction, we strive to be your one-stop destination for all things mobile. </p>
        
      </li>
      <li>
      <p className=" text-lg font-normal">Our mission is simple: to offer a wide selection of top-quality mobile phones, accessories, and gadgets that cater to your every need and preference. Whether you're a tech enthusiast looking for the newest releases or a budget-conscious shopper seeking value, we've got you covered.</p>

      </li>
      <li>
      <p className=" text-lg font-normal">
      <h3 className=' font-semibold'>  Unbeatable Selection: </h3>From flagship smartphones to budget-friendly options, we curate a diverse range of products to suit every taste and budget. Explore our extensive collection and find the perfect device for you.
      </p>
      </li>
      <li>
      <p className=" text-lg font-normal">
      <h3 className=' font-semibold'>  Quality Assurance: </h3>We understand the importance of quality when it comes to your mobile devices. That's why we source our products from reputable manufacturers and rigorously test each item to ensure reliability and performance.
      </p>
      </li>
      <li>
      <p className=" text-lg font-normal">
      <h3 className=' font-semibold'> Competitive Pricing:  </h3>We believe that cutting-edge technology should be accessible to everyone. That's why we offer competitive pricing on all our products, allowing you to enjoy the latest features without breaking the bank.
      </p>
      </li>

      </ul>



    </Container>
  );
}

export default About