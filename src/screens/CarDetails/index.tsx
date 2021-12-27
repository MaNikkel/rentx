import React from 'react'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

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
    About,
    Acessories,
    Footer
} from './styles'
import {BackButton} from "../../components/BackButton";
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button'

export function CarDetails() {
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
                
                <About>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo adipisci dolore dolores sit qui omnis odit, deserunt vel deleniti nulla quae minus repellendus sequi neque ipsam optio labore voluptates soluta.
                    Tenetur incidunt soluta alias at itaque, praesentium magnam dignissimos qui distinctio eos a natus suscipit, nam quae id, vel quisquam necessitatibus! Unde magni autem suscipit ullam sint? Magni, beatae ipsum?
                </About>
            </Content>

            <Footer>
                <Button title='Teste'/>
            </Footer>
        </Container>
    )
}
