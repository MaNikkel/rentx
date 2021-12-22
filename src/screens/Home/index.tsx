import React from 'react'

import Logo from '../../assets/logo.svg'

import {CarList, Container, Header, HeaderContent, TotalCars} from './styles'
import {StatusBar} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Car} from "../../components/Car";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={(item) => (
          <Car
            data={{
              rent: {
                period: 'adf',
                price: 10
              },
              thumbnail: '',
              name: 'asd',
              brand: 'asf',
            }}
          />
        )}

      />


    </Container>
  )
}
