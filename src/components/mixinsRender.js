import hello from './HelloWorld'

export default {

  render(createElement, children) {
    return createElement(
      hello,
      {
      },
      [...children]
    )
  }

}