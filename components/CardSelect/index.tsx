import React, { useContext, useEffect, useState } from 'react';
import { SpaceProps } from 'styled-system';
import { Context, ContextProvider } from './context';
import { CardContainer, FormContainer, Text, List, SelectedIcon } from './styles';
import { TouchableOpacity } from 'react-native'

import { CardProps, FormProps } from './types';

const selectedPng = require('../../assets/images/component/card-select/selected.png')


export function SelectForm(props: SpaceProps & FormProps) {
  return (
    <ContextProvider>
      <FormWithContext {...props} />
    </ContextProvider>
  )
}


function FormWithContext({ ...props }: SpaceProps & FormProps) {

  const { selectedId, setSelectedId } = useContext(Context)

  useEffect(() => {
    if (props.default && !selectedId) {
      setSelectedId(props.default)
    }

    if (typeof props.onSelected === 'function') {
      props.onSelected(selectedId)
    }
  }, [selectedId, props.default])

  return (
    <FormContainer {...props}>
      <List data={props.data} renderItem={({ item }: { item: { text: string; id: string | number } }) => <Card text={item.text} id={item.id} />} />
    </FormContainer >
  )
}

function Card(props: CardProps & SpaceProps) {
  const { selectedId, setSelectedId } = useContext(Context)
  const [selected, setSelected] = useState(false)


  useEffect(() => {
    if (props?.selected) {
      setSelectedId(props.id)
    }
  }, [props?.selected])

  useEffect(() => {
    setSelected(props.id === selectedId)
  }, [selectedId, props.id])

  function handlePress() {
    if (typeof props.onPress === 'function') {
      props.onPress(props.id)
    }
    setSelectedId(props.id)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <CardContainer>
        {selected && (<SelectedIcon source={selectedPng} />)}
        <Text>{props.text}</Text>
      </CardContainer>
    </TouchableOpacity>
  )
}