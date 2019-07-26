import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
      primary: '#481557',
      secondary: '#fed000',
      accent: '#9575CD',
      error: '#ffeb3b',
      warning: '#8bc34a',
      info: '#c58cbe',
      success: '#9575CD'
      }
})
