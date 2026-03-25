import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '../pages/about.vue'
import BirthdayInvitePage from '../pages/birthday-invite.vue'
import ContactPage from '../pages/contact.vue'
import DicePage from '../pages/dice.vue'
import DrumKitPage from '../pages/drum-kit.vue'
import GreenspacePage from '../pages/greenspace.vue'
import HomePage from '../pages/index.vue'
import MondrianPaintingPage from '../pages/mondrian-painting.vue'
import MovieRankingPage from '../pages/movie-ranking.vue'
import PhilosophyBlogPage from '../pages/philosophy-blog.vue'
import ProjectsPage from '../pages/projects.vue'
import ResearchPage from '../pages/research.vue'
import TindogPage from '../pages/tindog.vue'
import UiFeaturesPage from '../pages/ui-features.vue'
import BlogIndexPage from '../pages/blog/index.vue'
import BlogDetailPage from '../pages/blog/[...slug].vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/birthday-invite', component: BirthdayInvitePage },
    { path: '/contact', component: ContactPage },
    { path: '/dice', component: DicePage },
    { path: '/drum-kit', component: DrumKitPage },
    { path: '/greenspace', component: GreenspacePage },
    { path: '/mondrian-painting', component: MondrianPaintingPage },
    { path: '/movie-ranking', component: MovieRankingPage },
    { path: '/philosophy-blog', component: PhilosophyBlogPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/research', component: ResearchPage },
    { path: '/tindog', component: TindogPage },
    { path: '/ui-features', component: UiFeaturesPage },
    { path: '/blog', component: BlogIndexPage },
    { path: '/blog/:slug(.*)*', component: BlogDetailPage },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
