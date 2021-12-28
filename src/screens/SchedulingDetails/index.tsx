import React from 'react'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'
import { Feather } from '@expo/vector-icons'
import {
    CarImages,
    Container, Header,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles'
import {BackButton} from "../../components/BackButton";
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

export function SchedulingDetails() {
    const theme = useTheme()

    return (
        <Container>
            <Header>
              <BackButton onPress={() => {}}/>
            </Header>
            <CarImages>
                <ImageSlider imagesUrl={[ 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png' ]}/>
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Teste</Brand>
                        <Name>Teste</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>abuble</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name='380km/h' icon={SpeedSvg}/>
                    <Acessory name='3.2s' icon={AccelerationSvg}/>
                    <Acessory name='800 HP' icon={ForceSvg}/>
                    <Acessory name='Gasolina' icon={GasolineSvg}/>
                    <Acessory name='Auto' icon={ExchangeSvg}/>
                    <Acessory name='2 pessoas' icon={PeopleSvg}/>
                </Acessories>

                <RentalPeriod>
                  <CalendarIcon>
                    <Feather 
                      name='calendar'
                      size={RFValue(24)}
                      color={theme.colors.shape}
                    />
                  </CalendarIcon>

                  <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue>10/10/2021</DateValue>
                  </DateInfo>
                    <Feather 
                      name='chevron-right'
                      size={RFValue(10)}
                      color={theme.colors.text}
                    />
                  <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue>11/10/2021</DateValue>
                  </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                  <RentalPriceLabel>TOTAL</RentalPriceLabel>
                  <RentalPriceDetails>
                    <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                    <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                  </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button title='Teste'/>
            </Footer>
        </Container>
    )
}
