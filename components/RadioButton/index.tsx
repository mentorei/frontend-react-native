import React, { useContext, useEffect, useState } from 'react';
import { SpaceProps } from 'styled-system';
import { Context, ContextProvider } from './context';
import { Radio, RadioButtonContainer, RadioButtonFill, RadioButtonFormContainer } from './styles';

import { RadioButtonProps, RadioButtonFormProps } from './types';


export function RadioButtonForm(props: SpaceProps & RadioButtonFormProps) {
  return (
    <ContextProvider>
      <RadioButtonFormWithContext {...props} />
    </ContextProvider>
  )
}


function RadioButtonFormWithContext({ children, ...props }: SpaceProps & RadioButtonFormProps) {
  if (!children) throw new Error('A RadioButtonFor needs Radio Buttons as children')

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
    <RadioButtonFormContainer {...props}>
      {children}
    </RadioButtonFormContainer >
  )
}

export function RadioButton(props: RadioButtonProps & SpaceProps) {
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
    <RadioButtonContainer onPress={handlePress}>
      <Radio ml={30} {...props}>
        {selected && <RadioButtonFill  {...props} />}
      </Radio >
    </RadioButtonContainer>
  )
}