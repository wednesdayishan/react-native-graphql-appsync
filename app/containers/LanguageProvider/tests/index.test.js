import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import T from 'app/components/T'
import createStore from 'app/rootReducer'
import { translationMessages } from 'app/i18n'
import ConnectedLanguageProvider, { LanguageProvider } from '../index'

/* global shallowWithIntl */
/* eslint no-undef: "error" */

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>
    const container = shallowWithIntl(
      <LanguageProvider messages={translationMessages} locale="en">
        {children}
      </LanguageProvider>
    )
    expect(container.firstChild).not.toBeNull()
  })
})

describe('<ConnectedLanguageProvider />', () => {
  let reduxStore

  beforeAll(() => {
    const { store } = createStore()
    reduxStore = store
  })

  it('should render the default language messages', () => {
    const { queryByText } = render(
      <Provider store={reduxStore}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <T id="because" />
        </ConnectedLanguageProvider>
      </Provider>
    )
    expect(queryByText('because')).not.toBeNull()
  })
})
