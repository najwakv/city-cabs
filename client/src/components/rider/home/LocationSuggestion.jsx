import React from "react";
import tw from "tailwind-styled-components";

const LocationSuggestion = () => {
  return (
    <Wrapper>
      <Icon></Icon>
      <Rows>
        <Title>Office</Title>
        <Address>Kakkanchery, Chelambra, Kerala</Address>
      </Rows>
    </Wrapper>
  );
};

export default LocationSuggestion;

const Wrapper = tw.div`
    flex items-center w-full px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer
`

const Icon = tw.i`
    las la-home text-2xl text-black pr-5
`
const Rows = tw.div`
    flex-grow-1
`

const Title = tw.h1`
    text-lg font-semibold
`

const Address = tw.h3`
    text-sm text-gray-600
`
