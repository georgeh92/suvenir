<template>
  <v-toolbar class="primary">
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
          v-for="(mainLink, index) in mainLinks"
          :key="index"
          @click=""
          color="secondary"
          flat
          dark
          router
          :to='mainLink.link'
        >
          {{ mainLink.title }}
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
    <v-menu open-on-hover down offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="secondary"
          flat
          dark
          v-on="on"
        >
          Материалы
        </v-btn>
      </template>

      <v-list class="primary secondary--text">
        <v-list-tile
          v-for="(material, index) in materials"
          :key="index"
          @click=""
        >
          <v-list-tile-title>{{ material.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu open-on-hover down offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="secondary"
          flat
          dark
          v-on="on"
        >
          Инфо
        </v-btn>
      </template>


        <v-btn
          v-for="(contact, index) in contacts"
          :key="index"
          @click=""
          color="secondary"
          flat
          dark
          router
          to="/Surpriz"
        >
          {{ contact.title }}
        </v-btn>
    </v-menu>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>


<script>
  export default {
    data: () => ({
      mainLinks: [
        { title: 'Сувенир', link:'/'},
        { title: 'Сюрприз', link:'/Surpriz'},
        { title: 'Eleqance', link:'/Eleqance' },
      ],
      contacts: [
        { title: 'Преподаватели' },
        { title: 'Расписание' },
        { title: 'Родителям' },
        { title: 'Контакты' }
      ],
      materials: [
        { title: 'Фото' },
        { title: 'Видео' },
        { title: 'Статьи' },
        { title: 'Дипломы' }
      ]
    })
  }
</script>