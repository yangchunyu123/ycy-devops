/**
 * Your personal info, shown on the home page and the About page.
 * Edit freely — everything here is plain text.
 */
import type { IconName } from '../components/icons';
import { SITE } from '../config';

export const PROFILE = {
	/** Your display name — change SITE.author in src/config.ts. */
	name: SITE.author,
	/** One short line under your name. */
	role: '我是一名计算机大三的学生, 喜欢上devops课程',
	/** Optional, e.g. 'Berlin, Germany'. Leave empty to hide. */
	location: '',
	/**
	 * Optional photo: put a square image in public/ (e.g. public/avatar.jpg) and set '/avatar.jpg'.
	 * Leave empty to show your initials instead.
	 */
	avatar: '',

	/** Short introduction on the home page (1–2 sentences each). Leave empty to hide the intro card. */
	intro: [] as string[],

	/** Longer bio for the About page (one string per paragraph). Leave empty to hide it. */
	about: [] as string[],

	/** Hobby cards. Icons: code, camera, book, music, mountain, gamepad, coffee, plane. */
	hobbies: [
		{ icon: 'code', title: 'Tinkering', text: 'Side projects, home lab, and trying every new tool at least once.' },
		{ icon: 'camera', title: 'Photography', text: 'Street scenes and city lights, mostly after sunset.' },
		{ icon: 'mountain', title: 'Hiking', text: 'Weekend trails, early starts, and a good view at the top.' },
		{ icon: 'book', title: 'Reading', text: 'Sci-fi, history, and the odd engineering classic.' },
		{ icon: 'music', title: 'Music', text: 'Lo-fi for focus, live gigs whenever I can.' },
		{ icon: 'coffee', title: 'Coffee', text: 'Pour-over enthusiast. Still chasing the perfect cup.' },
	] satisfies { icon: IconName; title: string; text: string }[],
};
