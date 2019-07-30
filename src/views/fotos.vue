<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Albums</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-subheader>May</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout wrap>
            <v-flex v-for="item in bryansk2017.url" :key="item" xs4>
              <img
	            :src="item"
	            class="image"
	            alt=""
	            width="100%"
	            height="100%"
	 			@click.stop="dialog = true"
              >

		    <v-dialog
		      v-model="dialog"
		      max-width="1200"
		    >
		      <v-card>
		      <img
	            :src="item"
	            class="image"
	            alt=""
	            width="100%"
	            height="100%"
	 			@click.stop="dialog = true"
              >
		      </v-card>
		    </v-dialog>
            </v-flex>

          </v-layout>
        </v-container>
        <v-subheader>June</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout wrap>
            <v-flex v-for="i in 16" :key="i" xs4>
              <img :src="`http://suvenirdance.ru/fotos/2017/bryansk/bryansk20170${i}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-12"></v-footer>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
	export default{
		data: () => ({
		dialog: false,
		bryansk2017: {
			title: 'Корпоративный фестиваль Созвездие ООО Газпром трансгаз Москва г. Брянск 21-26 августа 2017',
			url: [
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201701.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201702.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201703.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201704.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201705.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201706.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201707.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201708.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201709.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201710.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201711.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201712.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201713.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201714.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201715.jpg',
				'http://suvenirdance.ru/fotos/2017/bryansk/bryansk201716.jpg'
				]
			 },

		prazdniksvtroici: {
			title: 'Праздник Святой Троицы 4 июня 2017 г. Приход Свято- Знаменского храма',
			url: [
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici001.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici002.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici003.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici004.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici005.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici006.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici007.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici008.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici009.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici010.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici011.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici012.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici013.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici014.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici015.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici016.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici017.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici018.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici019.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici020.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici021.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici022.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici023.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici024.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici025.jpg',
				'/fotos/2017/prazdniksvtroici2017/prazdniksvtroici026.jpg',
				]
			 },

		report2017: {
			title: 'Отчетный концерт «Весеннее настроение» 20 апреля  2017 ДК Рублево',
			url: [
				'/fotos/2017/report2017/report201701.jpg',
				'/fotos/2017/report2017/report201702.jpg',
				'/fotos/2017/report2017/report201703.jpg',
				'/fotos/2017/report2017/report201704.jpg',
				'/fotos/2017/report2017/report201705.jpg',
				'/fotos/2017/report2017/report201706.jpg',
				'/fotos/2017/report2017/report201707.jpg',
				'/fotos/2017/report2017/report201708.jpg',
				'/fotos/2017/report2017/report201709.jpg',
				'/fotos/2017/report2017/report201710.jpg',
				'/fotos/2017/report2017/report201711.jpg',
				'/fotos/2017/report2017/report201712.jpg',
				'/fotos/2017/report2017/report201713.jpg',
				'/fotos/2017/report2017/report201714.jpg',
				'/fotos/2017/report2017/report201715.jpg',
				'/fotos/2017/report2017/report201716.jpg',
				'/fotos/2017/report2017/report201717.jpg',
				'/fotos/2017/report2017/report201718.jpg',
				'/fotos/2017/report2017/report201719.jpg',
				'/fotos/2017/report2017/report201720.jpg',
				'/fotos/2017/report2017/report201721.jpg',
				'/fotos/2017/report2017/report201722.jpg',
				'/fotos/2017/report2017/report201723.jpg',
				'/fotos/2017/report2017/report201724.jpg',
				'/fotos/2017/report2017/report201725.jpg',
				'/fotos/2017/report2017/report201726.jpg',
				'/fotos/2017/report2017/report201727.jpg',
				'/fotos/2017/report2017/report201728.jpg',
				'/fotos/2017/report2017/report201729.jpg',
				'/fotos/2017/report2017/report201730.jpg',
				'/fotos/2017/report2017/report201731.jpg',
				'/fotos/2017/report2017/report201732.jpg',
				'/fotos/2017/report2017/report201733.jpg',
				'/fotos/2017/report2017/report201734.jpg',
				'/fotos/2017/report2017/report201735.jpg',
				'/fotos/2017/report2017/report201736.jpg',
				'/fotos/2017/report2017/report201737.jpg',
				'/fotos/2017/report2017/report201738.jpg',
				'/fotos/2017/report2017/report201739.jpg',
				'/fotos/2017/report2017/report201740.jpg',
				'/fotos/2017/report2017/report201740.jpg',
				'/fotos/2017/report2017/report201741.jpg',
				'/fotos/2017/report2017/report201742.jpg',
				'/fotos/2017/report2017/report201743.jpg',
				'/fotos/2017/report2017/report201744.jpg',
				'/fotos/2017/report2017/report201745.jpg',
				'/fotos/2017/report2017/report201746.jpg',
				'/fotos/2017/report2017/report201747.jpg',
				'/fotos/2017/report2017/report201748.jpg',
				'/fotos/2017/report2017/report201749.jpg',
				'/fotos/2017/report2017/report201750.jpg',
				'/fotos/2017/report2017/report201751.jpg',
				'/fotos/2017/report2017/report201752.jpg',
				'/fotos/2017/report2017/report201753.jpg',
				'/fotos/2017/report2017/report201754.jpg',
				'/fotos/2017/report2017/report201755.jpg',
				'/fotos/2017/report2017/report201756.jpg',
				'/fotos/2017/report2017/report201757.jpg',
				'/fotos/2017/report2017/report201758.jpg',
				'/fotos/2017/report2017/report201759.jpg',
				'/fotos/2017/report2017/report201760.jpg',
				'/fotos/2017/report2017/report201761.jpg',
				'/fotos/2017/report2017/report201762.jpg',
				'/fotos/2017/report2017/report201763.jpg',
				'/fotos/2017/report2017/report201764.jpg',
				'/fotos/2017/report2017/report201765.jpg',
				'/fotos/2017/report2017/report201766.jpg',
				'/fotos/2017/report2017/report201767.jpg',
				'/fotos/2017/report2017/report201768.jpg',
				'/fotos/2017/report2017/report201769.jpg',
				'/fotos/2017/report2017/report201770.jpg',
				'/fotos/2017/report2017/report201771.jpg',
				'/fotos/2017/report2017/report201772.jpg',
				'/fotos/2017/report2017/report201773.jpg',
				'/fotos/2017/report2017/report201774.jpg',
				'/fotos/2017/report2017/report201775.jpg'
				]
			 },

	sochi2017: {
			title: 'Факел Сочи май 2017',
			url: [
					'/fotos/2017/sochi201701/sochi201701.jpg',
					'/fotos/2017/sochi201701/sochi201702.jpg',
					'/fotos/2017/sochi201701/sochi201703.jpg',
					'/fotos/2017/sochi201701/sochi201704.jpg',
					'/fotos/2017/sochi201701/sochi201705.jpg',
					'/fotos/2017/sochi201701/sochi201706.jpg',
					'/fotos/2017/sochi201701/sochi201707.jpg',
					'/fotos/2017/sochi201701/sochi201708.jpg',
					'/fotos/2017/sochi201701/sochi201709.jpg',
					'/fotos/2017/sochi201701/sochi201710.jpg',
					'/fotos/2017/sochi201701/sochi201711.jpg'
				]
			 },

		koncert190217: {
			title: 'Концерт в Преображенском полку 5.03.2017',
			url: [
					'/fotos/2017/koncert190217/koncert190217-1.jpg',
					'/fotos/2017/koncert190217/koncert190217-2.jpg'
				]
			 },

		vistuplenie2016: {
			title: 'Первое выступление Светлячка',
			url: [
					'/fotos/2016/1vistuplenie2016/Image00001.jpg',
					'/fotos/2016/1vistuplenie2016/Image00002.jpg',
					'/fotos/2016/1vistuplenie2016/Image00003.jpg',
					'/fotos/2016/1vistuplenie2016/Image00004.jpg',
					'/fotos/2016/1vistuplenie2016/Image00005.jpg',
					'/fotos/2016/1vistuplenie2016/Image00006.jpg',
					'/fotos/2016/1vistuplenie2016/Image00007.jpg'
				]
			 },

		mgtk2017: {
			title: 'Вручение Диплома о присвоении звания МГТК февраль 2017',
			url: [
					'/fotos/2017/mgtk2017/IMG_2395.jpg',
					'/fotos/2017/mgtk2017/IMG_2396.jpg'
				]
			 },

		svtlyachok2016: {
			title: 'Открытый урок Светлячок декабрь 2016',
			url: [
					'/fotos/2016/svtlyachok2016/img_3950.jpg',
					'/fotos/2016/svtlyachok2016/img_3959.jpg',
					'/fotos/2016/svtlyachok2016/img_3986.jpg',
					'/fotos/2016/svtlyachok2016/img_4003.jpg',
					'/fotos/2016/svtlyachok2016/img_4017.jpg',
					'/fotos/2016/svtlyachok2016/img_4031.jpg',
					'/fotos/2016/svtlyachok2016/img_4046.jpg',
					'/fotos/2016/svtlyachok2016/img_4075.jpg',
					'/fotos/2016/svtlyachok2016/img_4130.jpg',
					'/fotos/2016/svtlyachok2016/img_4131.jpg',
					'/fotos/2016/svtlyachok2016/img_4143.jpg'
				]
			 },
		myhouse2017: {
			title: 'Концерт Мой дом - земля. Воробьевы горы',
			url: [
					'/fotos/2017/myhouse2017/IMG_2083.jpg',
					'/fotos/2017/myhouse2017/IMG_2083-1.jpg',
					'/fotos/2017/myhouse2017/IMG_2083-2.jpg',
					'/fotos/2017/myhouse2017/IMG_2083-3.jpg',
					'/fotos/2017/myhouse2017/IMG_2109.jpg',
					'/fotos/2017/myhouse2017/IMG_2110.jpg',
					'/fotos/2017/myhouse2017/IMG_2111.jpg'
				]
			 },
		fakel2016: {
			title: 'Факел "ПАО "Газпром" г. Уфа октябрь 2016г.',
			url: [
					'fotos/2016/fakel2016/fakel201601.jpg',
					'fotos/2016/fakel2016/fakel201602.jpg',
					'fotos/2016/fakel2016/fakel201603.jpg',
					'fotos/2016/fakel2016/fakel201604.jpg',
					'fotos/2016/fakel2016/fakel201605.jpg',
					'fotos/2016/fakel2016/fakel201606.jpg',
					'fotos/2016/fakel2016/fakel201607.jpg',
					'fotos/2016/fakel2016/fakel201608.jpg',
					'fotos/2016/fakel2016/fakel201609.jpg',
					'fotos/2016/fakel2016/fakel201610.jpg',
					'fotos/2016/fakel2016/fakel201611.jpg',
					'fotos/2016/fakel2016/fakel201612.jpg',
					'fotos/2016/fakel2016/fakel201613.jpg',
					'fotos/2016/fakel2016/fakel201614.jpg',
					'fotos/2016/fakel2016/fakel201615.jpg',
					'fotos/2016/fakel2016/fakel201616.jpg',
					'fotos/2016/fakel2016/fakel201617.jpg',
					'fotos/2016/fakel2016/fakel201618.jpg',
					'fotos/2016/fakel2016/fakel201619.jpg',
					'fotos/2016/fakel2016/fakel201620.jpg'
				]
			 },
		starTown2017: {
			title: 'Выступление в Звездном городке 02 мая 2017г',
			url: [
					'/fotos/2017/star-town2017/img_2458.jpg',
					'/fotos/2017/star-town2017/img_2462.jpg',
					'/fotos/2017/star-town2017/IMG_2468.jpg'
				]
			 },
		may2016: {
			title: '9 мая 2016',
			url: [
					'/fotos/9may2016/_MG_4214.jpg',
					'/fotos/9may2016/_MG_4260.jpg'
				]
			 },
		koncert2016: {
			title: 'Отчётный концерт 2016',
			url: [
				'fotos/koncert2016/1.jpg',
				'fotos/koncert2016/2.jpg',
				'fotos/koncert2016/3.jpg',
				'fotos/koncert2016/4.jpg',
				'fotos/koncert2016/5.jpg',
				'fotos/koncert2016/6.jpg',
				'fotos/koncert2016/7.jpg',
				'fotos/koncert2016/8.jpg',
				'fotos/koncert2016/9.jpg',
				'fotos/koncert2016/10.jpg',
				'fotos/koncert2016/11.jpg',
				'fotos/koncert2016/12.jpg',
				'fotos/koncert2016/13.jpg',
				'fotos/koncert2016/14.jpg',
				'fotos/koncert2016/16.jpg',
				'fotos/koncert2016/17.jpg',
				'fotos/koncert2016/18.jpg',
				'fotos/koncert2016/19.jpg',
				'fotos/koncert2016/20.jpg',
				'fotos/koncert2016/21.jpg',
				'fotos/koncert2016/22.jpg',
				'fotos/koncert2016/23.jpg',
				'fotos/koncert2016/24.jpg',
				'fotos/koncert2016/25.jpg',
				'fotos/koncert2016/26.jpg',
				'fotos/koncert2016/27.jpg',
				'fotos/koncert2016/28.jpg',
				'fotos/koncert2016/29.jpg'
				]
			 },
		depiano: {
			title: 'Встреча в кафе Da Pino',
			url: [
					'fotos/depiano/depiano_01.jpg',
					'fotos/depiano/depiano_02.jpg',
					'fotos/depiano/depiano_03.jpg',
					'fotos/depiano/depiano_04.jpg',
					'fotos/depiano/depiano_05.jpg',
					'fotos/depiano/depiano_06.jpg',
					'fotos/depiano/depiano_07.jpg',
					'fotos/depiano/depiano_08.jpg',
					'fotos/depiano/depiano_09.jpg',
					'fotos/depiano/depiano_10.jpg',
					'fotos/depiano/depiano_11.jpg',
					'fotos/depiano/depiano_12.jpg'
				]
			 },
		grandmoscow: {
			title: 'Grand Moscow фестиваль Останкино 2015',
			url: [
					'/fotos/grandmoscow/grandmoscow_1.jpg',
					'/fotos/grandmoscow/grandmoscow_2.jpg',
					'/fotos/grandmoscow/grandmoscow_3.jpg'
				]
			 },
		otchet2015: {
			title: 'Отчетный концерт 2015',
			url: [
					'/fotos/otchet2015/koncert2015_01.jpg',
					'/fotos/otchet2015/koncert2015_02.jpg',
					'/fotos/otchet2015/koncert2015_03.jpg',
					'/fotos/otchet2015/koncert2015_04.jpg',
					'/fotos/otchet2015/koncert2015_05.jpg',
					'/fotos/otchet2015/koncert2015_06.jpg',
					'/fotos/otchet2015/koncert2015_07.jpg',
					'/fotos/otchet2015/koncert2015_08.jpg',
					'/fotos/otchet2015/koncert2015_09.jpg',
					'/fotos/otchet2015/koncert2015_10.jpg',
					'/fotos/otchet2015/koncert2015_11.jpg',
					'/fotos/otchet2015/koncert2015_12.jpg',
					'/fotos/otchet2015/koncert2015_13.jpg',
					'/fotos/otchet2015/koncert2015_14.jpg',
					'/fotos/otchet2015/koncert2015_15.jpg',
					'/fotos/otchet2015/koncert2015_16.jpg',
					'/fotos/otchet2015/koncert2015_17.jpg',
					'/fotos/otchet2015/koncert2015_18.jpg',
					'/fotos/otchet2015/koncert2015_19.jpg',
					'/fotos/otchet2015/koncert2015_20.jpg',
					'/fotos/otchet2015/koncert2015_21.jpg',
					'/fotos/otchet2015/koncert2015_22.jpg',
					'/fotos/otchet2015/koncert2015_23.jpg'
				]
			 },
		voen2015: {
			title: 'Отчетный концерт 2015. Военная программа.',
			url: [
					'/fotos/otchet2015/voen2015_1.jpg',
					'/fotos/otchet2015/voen2015_2.jpg',
					'/fotos/otchet2015/voen2015_3.jpg',
					'/fotos/otchet2015/voen2015_4.jpg',
					'/fotos/otchet2015/voen2015_5.jpg',
					'/fotos/otchet2015/voen2015_6.jpg'
				]
			 },
		choice2014: {
			title: 'Выборы в Государственную Думу VI созыва 2014',
			url: [
					'/fotos/choice2014/1_1.jpg',
					'/fotos/choice2014/1_2.jpg',
					'/fotos/choice2014/1_3.jpg',
					'/fotos/choice2014/1_4.jpg',
					'/fotos/choice2014/1_5.jpg',
					'/fotos/choice2014/1_6.jpg',
					'/fotos/choice2014/1_7.jpg',
					'/fotos/choice2014/1_8.jpg',
					'/fotos/choice2014/1_9.jpg'
				]
			 },
		mmk2014: {
			title: 'Посещение Государственного музея музыкальной культуры им. М.И. Глинки',
			url: [
					'/fotos/mmk2014/1_1.jpg',
					'/fotos/mmk2014/1_2.jpg',
					'/fotos/mmk2014/1_3.jpg',
					'/fotos/mmk2014/1_4.jpg',
					'/fotos/mmk2014/1_5.jpg',
					'/fotos/mmk2014/1_6.jpg',
					'/fotos/mmk2014/1_7.jpg',
					'/fotos/mmk2014/1_8.jpg',
					'/fotos/mmk2014/1_9.jpg'
				]
			 },
		otchtnkon2014: {
			title: 'Отчетный концерт 2014',
			url: [
					'/fotos/otchtnkon2014/1_01.jpg',
					'/fotos/otchtnkon2014/1_02.jpg',
					'/fotos/otchtnkon2014/1_03.jpg',
					'/fotos/otchtnkon2014/1_04.jpg',
					'/fotos/otchtnkon2014/1_05.jpg',
					'/fotos/otchtnkon2014/1_06.jpg',
					'/fotos/otchtnkon2014/1_07.jpg',
					'/fotos/otchtnkon2014/1_08.jpg',
					'/fotos/otchtnkon2014/1_09.jpg',
					'/fotos/otchtnkon2014/1_10.jpg',
					'/fotos/otchtnkon2014/1_11.jpg',
					'/fotos/otchtnkon2014/1_12.jpg',
					'/fotos/otchtnkon2014/1_13.jpg',
					'/fotos/otchtnkon2014/1_14.jpg',
					'/fotos/otchtnkon2014/1_15.jpg',
					'/fotos/otchtnkon2014/1_16.jpg',
					'/fotos/otchtnkon2014/1_17.jpg',
					'/fotos/otchtnkon2014/1_18.jpg',
					'/fotos/otchtnkon2014/1_19.jpg',
					'/fotos/otchtnkon2014/1_20.jpg',
					'/fotos/otchtnkon2014/1_21.jpg',
					'/fotos/otchtnkon2014/1_22.jpg',
					'/fotos/otchtnkon2014/1_23.jpg',
					'/fotos/otchtnkon2014/1_24.jpg',
					'/fotos/otchtnkon2014/1_25.jpg',
					'/fotos/otchtnkon2014/1_26.jpg',
					'/fotos/otchtnkon2014/1_27.jpg',
					'/fotos/otchtnkon2014/1_28.jpg',
					'/fotos/otchtnkon2014/1_29.jpg',
					'/fotos/otchtnkon2014/1_30.jpg'
				]
			 },
		open2014: {
			title: 'Открытый урок февраль 2014 группа ласточки',
			url: [
					'/fotos/open2014/1_01.jpg',
					'/fotos/open2014/1_02.jpg',
					'/fotos/open2014/1_03.jpg',
					'/fotos/open2014/1_04.jpg',
					'/fotos/open2014/1_05.jpg',
					'/fotos/open2014/1_06.jpg',
					'/fotos/open2014/1_07.jpg',
					'/fotos/open2014/1_08.jpg',
					'/fotos/open2014/1_09.jpg',
					'/fotos/open2014/1_10.jpg',
					'/fotos/open2014/1_11.jpg',
					'/fotos/open2014/1_12.jpg',
					'/fotos/open2014/1_13.jpg',
					'/fotos/open2014/1_14.jpg',
					'/fotos/open2014/1_15.jpg'
				]
			 },
		vremenagoda2014: {
			title: 'Региональный конкурс хореографического искусства Времена года январь 2014',
			url: [
					'/fotos/vremenagoda2014/1_01.jpg',
					'/fotos/vremenagoda2014/1_02.jpg',
					'/fotos/vremenagoda2014/1_03.jpg',
					'/fotos/vremenagoda2014/1_04.jpg',
					'/fotos/vremenagoda2014/1_05.jpg',
					'/fotos/vremenagoda2014/1_06.jpg',
					'/fotos/vremenagoda2014/1_07.jpg',
					'/fotos/vremenagoda2014/1_08.jpg',
					'/fotos/vremenagoda2014/1_09.jpg',
					'/fotos/vremenagoda2014/1_10.jpg'
				]
			 },
		otchetnik: {
			title: 'День «Сувенира»! 15-летие Народного коллектива хореографический ансамбль «Сувенир»',
			url: [
					'/fotos/otchetnik/1__01.jpg',
					'/fotos/otchetnik/1__02.jpg',
					'/fotos/otchetnik/1__03.jpg',
					'/fotos/otchetnik/1__04.jpg',
					'/fotos/otchetnik/1__05.jpg',
					'/fotos/otchetnik/1__06.jpg',
					'/fotos/otchetnik/1__07.jpg',
					'/fotos/otchetnik/1__08.jpg',
					'/fotos/otchetnik/1__09.jpg',
					'/fotos/otchetnik/1__10.jpg',
					'/fotos/otchetnik/1__11.jpg',
					'/fotos/otchetnik/1__12.jpg',
					'/fotos/otchetnik/1__13.jpg',
					'/fotos/otchetnik/1__14.jpg',
					'/fotos/otchetnik/1__15.jpg'
				]
			 },
		many_fotos: {
			title: 'Фотографии разных лет',
			url: [
					'fotos/suvenir_01.jpg',
					'fotos/suvenir_02.jpg',
					'fotos/suvenir_03.jpg',
					'fotos/suvenir_04.jpg',
					'fotos/suvenir_05.jpg',
					'fotos/suvenir_06.jpg',
					'fotos/suvenir_07.jpg',
					'fotos/suvenir_08.jpg',
					'fotos/suvenir_09.jpg',
					'fotos/suvenir_10.jpg',
					'fotos/suvenir_11.jpg',
					'fotos/suvenir_12.jpg',
					'fotos/suvenir_13.jpg',
					'fotos/suvenir_14.jpg',
					'fotos/suvenir_15.jpg',
					'fotos/suvenir_16.jpg',
					'fotos/suvenir_17.jpg',
					'fotos/suvenir_18.jpg',
					'fotos/suvenir_19.jpg',
					'fotos/suvenir_20.jpg',
					'fotos/suvenir_21.jpg',
					'fotos/suvenir_22.jpg',
					'fotos/suvenir_23.jpg',
					'fotos/suvenir_24.jpg',
					'fotos/suvenir_25.jpg',
					'fotos/suvenir_26.jpg',
					'fotos/suvenir_27.jpg',
					'fotos/suvenir_28.jpg',
					'fotos/suvenir_29.jpg',
					'fotos/suvenir_30.jpg',
					'fotos/suvenir_31.jpg',
					'fotos/suvenir_32.jpg',
					'fotos/suvenir_33.jpg',
					'fotos/suvenir_34.jpg',
					'fotos/suvenir_35.jpg',
					'fotos/suvenir_36.jpg',
					'fotos/suvenir_37.jpg',
					'fotos/suvenir_38.jpg',
					'fotos/suvenir_39.jpg',
					'fotos/suvenir_40.jpg'
				]
			 }
		})
	}

</script>