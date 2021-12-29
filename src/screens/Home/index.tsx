import React, { useEffect, useState } from 'react'

import Logo from '../../assets/logo.svg'

import {CarList, Container, Header, HeaderContent, TotalCars} from './styles'
import {StatusBar} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Car} from "../../components/Car";
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';


export function Home() {
  const navigation = useNavigation()
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(false)
  
  const carData = {
    rent: {
      period: 'adf',
      price: 10
    },
    thumbnail: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png',
    name: 'asd',
    brand: 'asf',
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await api.get('/cars')
        setCars(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }

      
    }

    setLoading(true)
    fetchCars()
  }, [])

  if (loading) {
    return <Load />
  }

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
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Car
            data={item.item}
            onPress={handleCarDetails}
          />
        )}

      />


    </Container>
  )
}
