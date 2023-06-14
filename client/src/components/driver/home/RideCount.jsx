import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import driverInstance from "../../../instance/driverInstance";
import { toast } from "react-hot-toast";

const RideCount = () => {
  const [ride, setRide] = useState(null);
  const [fare, setFare] = useState(null);
  const driverId = localStorage.getItem("driverId");
  useEffect(() => {
    driverInstance
      .post("/getRideDetails", { driverId })
      .then((response) => {
        setRide(response.data.result.count);
        setFare(response.data.result.totalFare);
      })
      .catch((error) => {
        const { response, message } = error;
        const errorMessage = response ? response.data.message : message;
        toast.error(errorMessage);
      });
  }, []);
  return (
    <>
      <ActionBox>
        <GradientBox>
          <Container>
            <Wrapper>
              <Icon></Icon>
              <Rows>
                <Title>Rides</Title>
                <Address>{ride}</Address>
              </Rows>
            </Wrapper>
          </Container>
        </GradientBox>
        <GradientBox>
          <Container>
            <Wrapper>
              <Icon></Icon>
              <Rows>
                <Title>Earnings</Title>
                <Address>RS: {fare}</Address>
              </Rows>
            </Wrapper>
          </Container>
        </GradientBox>
      </ActionBox>
    </>
  );
};

export default RideCount;

const ActionBox = tw.div`
  absolute  bottom-0 left-0 w-full z-10 px-3 pb-8 bg-gradient-to-t from-gray-200 cursor-pointer flex 
`;
const GradientBox = tw.div`
  p-px rounded-lg bg-gradient-to-b from-gray-300 via-gray-300 w-full
`;
const Container = tw.div`
  bg-white w-full rounded-lg filter drop-shadow-xl p-3
`;
const Wrapper = tw.div`
    flex items-center w-full px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-300
`;

const Icon = tw.i`
    las la-home text-2xl text-black pr-5
`;
const Rows = tw.div`
    flex-grow-1
`;

const Title = tw.h1`
    text-lg font-semibold
`;

const Address = tw.h3`
    text-sm text-gray-600
`;
