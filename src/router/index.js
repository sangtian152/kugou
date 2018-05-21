import Vue from 'vue'
import VueRouter from 'vue-router'
import NewSongs from '../views/NewSongs.vue'
import Rank from '../views/Rank.vue'
import Plist from '../views/Plist.vue'
import Singer from '../views/Singer.vue'
import Search from '../views/Search.vue'
import RankInfo from '../views/RankInfo.vue'
import PlistInfo from '../views/PlistInfo.vue'
import SingerList from '../views/SingerList.vue'
import SingerInfo from '../views/SingerInfo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/newSongs',
		component: NewSongs,
		alias: '/'
	}, {
		path: '/rank',
		component: Rank
	}, {
		path: '/plist',
		component: Plist
	}, {
		path: '/singer',
		component: Singer
	}, {
		path: '/search',
		component: Search
	}, {
		path: '/rank/info/:id',
		component: RankInfo
	}, {
		path: '/plist/info/:id',
		component: PlistInfo
	}, {
		path: '/singer/list/:id',
		component: SingerList
	}, {
		path: '/singer/info/:id',
		component: SingerInfo
	}, {
		path: '*', redirect: '/'
	}],
	mode: 'history'
})

export default router
